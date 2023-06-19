import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  body:any={
    email:''
  }
  errorMessage:string='';

//  inject ApiServiceService and Router in constructor and import them from @angular/router and ../api-service.service

  constructor(private sObj:ApiServiceService, private route:Router) { }

  forgetPassword(){
    this.sObj.forgetPassword(this.body).subscribe({
      next: () => {
        this.route.navigate(['show-forgetPassword'])
      },
      error: () => {
        this.errorMessage='Something Went Wrong';
      },
    });

    console.log(this.body)
  }

}
