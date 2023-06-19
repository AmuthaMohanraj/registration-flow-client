import { Component} from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  errorMessage:string='';
  body:any={
    token:'',
    email:'',
    password:''
  }

  email:string;

  constructor(private sObj:ApiServiceService,private activeRoute:ActivatedRoute){
    this.body.token=String(this.activeRoute.snapshot.queryParamMap.get('token'))
    const decodedToken: any = jwt_decode(this.body.token);

// Retrieve the email from the decoded token
   this.body.email= decodedToken.email;
   this.email=this.body.email;

// Now you have the email extracted from the token
console.log(this.body.email);
  }
  
  resetPassword(){    
    this.sObj.resetPassword(this.body).subscribe({
      next: () => {
        this.errorMessage='Password Reset Succussfull';
      },
      error: () => {
        this.errorMessage='Something Went Wrong';
      },
    })
  }


}
