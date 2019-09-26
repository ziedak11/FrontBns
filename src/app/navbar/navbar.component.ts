import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';

import {AproposComponent}from'../apropos/apropos.component';


/* Debut Contenent */
@Component({
  selector: 'app-navbar-connecter-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">S'AUTHENTIFIER</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <div class="alert alert-info">
    Username: test<br />
    Password: test
</div>
      <p>
       - Domaine de l’Eau :<br>
         </p>

       <h2>Login</h2>
       <div class="form-group">

          <label>Mot de passe</label><input type="password" formControlName="username" class="form-control"/>
       </div>
    </div>
    <div class="modal-footer">
     <button class="btn btn-primary"(click)="tester()">Login</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  providers: [DatePipe]
})
export class NavbarContentConnecter {
  @Input() name;


  //myDate = new Date();

  constructor(public activeModal: NgbActiveModal,private datePipe: DatePipe) {
  //this.myDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
     //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
}
/* fin Contenent */

/* ***Component*** */


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   loginForm: FormGroup;
   login:string ='non';
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit() {
    //this.tester();
  }

  connecter(){
    const modalRef = this.modalService.open(NavbarContentConnecter);
    modalRef.componentInstance.name = 'World';
  }
   /*tester(){ this.modalService.activeModal.close('Close click');
     this.login='oui';}*/

}
