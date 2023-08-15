import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { CentrosComponent } from './centros/centros.component';
import { GuiasComponent } from './guias/guias.component';
import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'login', component: LoginComponent},
  {path: 'centros', component: CentrosComponent},
  {path: 'guias', component: GuiasComponent},
  {path: 'tips', component: TipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
