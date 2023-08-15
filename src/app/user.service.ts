import { Injectable } from "@angular/core";
import { User } from "./entities/user";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { LoginUsr } from "./entities/userLog";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private url = 'http://localhost:8083';
    userToken ?: any;
    idUser ?: number;

    constructor(private http: HttpClient){
        this.readToken();
    }

    private readToken() {
        if ( localStorage.getItem('token')){
            this.userToken = localStorage.getItem('token');
        }else{
            this.userToken = "";
        }
    }

    getIdUser(){
      return this.idUser;
    }

    private saveId(idUser:any){
      this.idUser = idUser;
      localStorage.setItem('idUser', idUser)
    }

    private saveToken(token: any){
        this.userToken = token;
        localStorage.setItem('token', token)
    }
    
  signin(user: User) {
    const body = {
        username : user.username,
        password : user.password,
        nombres : user.nombres,
        apepat : user.apepat,
        apemat : user.apemat,
        region : user.region,
        facultad : user.facultad,
        programa_educativo : user.programa_educativo,
        semestre : user.semestre,
        preguntaid : user.preguntaid,
        respuesta : user.respuesta
    };
    
    return this.http.post(`${this.url}/auth/signin`,body,{responseType : 'text'})
    .pipe(map((resp : any) => {
        return resp
    }));
  }

  login(user:LoginUsr){
    const body= {
      usernameOrEmail: user.usernameOrEmail,
      password: user.password
    };
    
    return this.http.post(`${this.url}/auth/login`, body)
    .pipe(map((resp:any)=>{
      this.saveToken(resp['tokenDeAcceso']);
      this.saveId(resp['id']);
      return resp;
    }));
  }

}