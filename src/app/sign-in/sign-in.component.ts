import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {


  errorMessage:string='';

  body:any={
    email:'',
    password:''
  }

  constructor(private sobj:ApiServiceService,private router:Router){ }

  login(){
    this.sobj.login(this.body).subscribe({
      next: () => {
        this.router.navigate(['home'])
      },
      error: () => {
        this.errorMessage='Something Went Wrong';
      },
    });

    console.log(this.body)
  }

}
