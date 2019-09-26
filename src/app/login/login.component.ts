import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:import-spacing
import { User} from '../model/user';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:new-parens
   user = new User;

  constructor( private loginService : LoginServiceService  ) { }

  ngOnInit() {
  }
 tester() {
     this.loginService.loginUser(this.user).subscribe(
       res => {
         console.log(res);
         localStorage.setItem('token', res.token);

      }
     );

 }
}
