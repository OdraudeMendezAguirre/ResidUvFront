import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user: User = new User();
  password= "";

  constructor(private service: UserService, private router:Router){}

  registrar(){
    if(this.password != this.user.password){
      window.alert("Las contraseñas no coinciden")
    }else{
      this.service.signin(this.user).subscribe(resp => {
        this.router.navigateByUrl('/login')
      })
    }
  }
}
