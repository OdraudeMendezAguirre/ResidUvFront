import { Component, OnInit } from '@angular/core';
import { LoginUsr } from '../entities/userLog';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  remember = false;
  user:LoginUsr =new LoginUsr();

  constructor(private router:Router, private api:UserService){}

  ngOnInit(): void {
    if(localStorage.getItem('usernameOrEmail') || localStorage.getItem('usernameOrEmail')){
      this.user.usernameOrEmail = JSON.stringify(localStorage.getItem('usernameOrEmail'));
      this.remember = true;
    }
  }

  login(){
    this.api.login(this.user).subscribe(
      resp => {
        if(this.remember){
          localStorage.setItem ('usernameOrEmail',JSON.stringify( this.user.usernameOrEmail));
          console.log(resp)
        }
        this.router.navigateByUrl('/home')
      }
    )
  }


}
