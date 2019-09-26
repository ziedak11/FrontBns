import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import{Router} from'@angular/router';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 httpOptions={headers:new HttpHeaders({'Content-type' : 'application/json'})}

private _loginUrl="https://my-freedomtravel.com/api/login_check";

  constructor( private http : HttpClient ,private _router:Router) { }

loginUser(user: User): Observable<User>{return this.http.post<User>(this._loginUrl,user,this.httpOptions)}

}
