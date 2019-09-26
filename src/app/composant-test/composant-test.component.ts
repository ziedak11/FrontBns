import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

/* ***Content*** */

@Component({
  selector: 'app-composant-test-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">BNS ENGINEERING!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!
          Son évolution lui permet aujourd’hui de s’adresser à tous les domaines d’activité, 
           le Consulting et l’ingénierie des solutions (Etudes et Conception de Systèmes).

  
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ComposantTestContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

/* ***Component*** */
@Component({
  selector: 'app-composant-test-component',
  templateUrl: './composant-test.component.html',
  styleUrls: ['./composant-test.component.css'],
})
export class ComposantTestComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ComposantTestContent);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit() { }
}
