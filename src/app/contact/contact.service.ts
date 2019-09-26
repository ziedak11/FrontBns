import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs/Observable';

import{MessageModel}from'../model/message.model';
import{API_URLS} from '../config/api.url.config';

@Injectable({ providedIn: 'root' })
export class ContactService{

  constructor(private http: HttpClient) { }

  ajouterMessage( message :MessageModel):Observable<any> {
      return this.http.post(API_URLS.ADD_MESSAGE_URL, message);
   }


}
