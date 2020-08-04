import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup/signup-form.component';
import { SignInUserComponent } from './sign-In/signIn-user.component';
import { LoginComponent } from './sign-In/login/login-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =[
  {path: 'signup-form', component: SignupFormComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: '', component: SignInUserComponent },
  {path: 'login-user', component: LoginComponent , data : { name: '' }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
