import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyComponent } from './verify/verify.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ShowVerifyComponent } from './show-verify/show-verify.component';
import { HomeComponent } from './home/home.component';
import { ShowForgetPasswordComponent } from './show-forget-password/show-forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignUpComponent},
  {path:'signin',component:SignInComponent},
  {path:'show-verify',component:ShowVerifyComponent},
  {path:'verify',component:VerifyComponent},
  { path:'verify/:token', component: VerifyComponent }, // Add this route
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'show-forgetPassword',component:ShowForgetPasswordComponent},
  {path:'resetPassword',component:ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


