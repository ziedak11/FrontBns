import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import{Observable} from'rxjs/Observable';


import{MessageModel}from'../model/message.model';
import{API_URLS} from '../config/api.url.config';

@Injectable({ providedIn: 'root' })
export class MessageService {

  constructor(private http: HttpClient){}


  afficherMessages(){
  return  this.http.get<MessageModel[]>(API_URLS.LOAD_MESSAGE_URL);
  }


  supprimerMessage(message:MessageModel){
    return this.http.post(API_URLS.DELETE_MESSAGE_URL,message);
  }

}
