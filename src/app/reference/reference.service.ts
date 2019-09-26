import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from'rxjs/Observable';

import{ReferenceModel}from'../model/reference.model';
import{API_URLS} from '../config/api.url.config';

@Injectable({ providedIn: 'root' })
export class ReferenceService {
    constructor(private http: HttpClient) { }

        afficherReferences() {
          return this.http.get<ReferenceModel[]>(API_URLS.LOAD_REFERENCE_URL);
          }


        ajouterReference( reference :ReferenceModel):Observable<any> {
            return this.http.post(API_URLS.ADD_REFERENCE_URL,reference);
         }


      supprimerReference(reference : ReferenceModel):Observable<any>{

          return this.http.post(API_URLS.DELETE_REFERENCE_URL,reference);

        }

        modifierReference(reference : ReferenceModel):Observable<any>{
           return this.http.put(API_URLS.UPDATE_REFERENCE_URL,reference);

         }
}
