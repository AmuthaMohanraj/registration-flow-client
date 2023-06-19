import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  token:string='';

  constructor(private apiSObj:ApiServiceService,private activeRoute:ActivatedRoute,private router:Router){
     this.token=String(this.activeRoute.snapshot.queryParamMap.get('token'))
  }

  ngOnInit(): void {
    this.apiSObj.verify(this.token).subscribe(response => {
      this.router.navigate(['signin']); // Redirect to the signin page
    });
  }

}
