import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService{

  url:string='';

  constructor(private http:HttpClient) {}

  // signup function
  signUp(body:any){
    this.url='http://localhost:3000/user-list/signup'
    return this.http.post(this.url,body)
  }

  // login function
  login(body:any){
    this.url='http://localhost:3000/user-list/login'
    return this.http.post(this.url,body)
  }

  //verify user function 
  verify(token:string){
    this.url='http://localhost:3000/user-list/verify'
    return this.http.put(this.url,{token})
  }

  //forget password
  forgetPassword(body:any){
   this.url='http://localhost:3000/user-list/forgotPassword'
   return this.http.put(this.url,body)
  }

  // 
  resetPassword(body:any){
    console.log('service side',body)
    this.url='http://localhost:3000/user-list/resetPassword'
    return this.http.put(this.url,body)
  }
  
}
