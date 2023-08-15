import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CentrosComponent } from './centros/centros.component';
import { GuiasComponent } from './guias/guias.component';
import { TipsComponent } from './tips/tips.component';
import { UserService } from './user.service';
import { ResiduosService } from './residuos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    FooterComponent,
    NavbarComponent,
    CentrosComponent,
    GuiasComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,ResiduosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
