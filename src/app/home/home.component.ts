import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ResiduosService } from '../residuos.service';
import { Contribucion } from '../entities/contribucion';
import { User } from '../entities/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista:any;
  date:Date = new Date();
  fecha: string = this.date.toISOString().slice(0, 10);
  contribucion: Contribucion = new Contribucion();
  constructor(private api:ResiduosService,private auth: UserService){}
  
  ngOnInit(): void {
    this.api.getResiduos().subscribe(resp=>{
      this.lista=resp;
    }, error=>{console.error(error)})
  }

  guardar(){
    this.contribucion.alumnoID = this.auth.getIdUser();
    this.contribucion.fecha_registro = this.fecha;
    this.api.postContribucion(this.contribucion).subscribe(resp=> {
      console.log(resp);
    })
  }

}
