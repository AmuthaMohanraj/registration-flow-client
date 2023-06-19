import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  errorMessage: string='';

  body:any={
  username:"",
  email:"",
  password:"",
  }
  

  constructor(private sobj:ApiServiceService,private router:Router){

  }

  signUp() {

    this.sobj.signUp(this.body).subscribe({
      next: () => {
        this.router.navigate(['show-verify'])
      },
      error: () => {
        this.errorMessage='Something Went Wrong';
      },
    });
  
    console.log("signup clicked",this.body);

  }
}
