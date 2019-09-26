import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from'@angular/forms';

//import { MustMatch } from './_helpers/must-match.validator';

import{ReferenceModel}from'../model/reference.model';
import{ReferenceService}from'../reference/reference.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

references:ReferenceModel[];
referenceForm :FormGroup;
submitted = false;
reference:ReferenceModel;
selectedReference:ReferenceModel;
operation : string= 'add';

     constructor(private referenceService : ReferenceService , private formBuilder : FormBuilder) {
       this.createForm();
     }



     ngOnInit() {

      this.loadReferences();
      this.initReference();
       }


     createForm(){
      this.referenceForm = this.formBuilder.group({
         pay: ['', Validators.required],
         institution: ['', Validators.required],
         logo: ['', [Validators.required]],
         description: ['', Validators.required]
           });
         }


     get f() { return this.referenceForm.controls; }


     onSubmit() {
         this.submitted = true;

         // stop here if form is invalid
         if (this.referenceForm.invalid) {
             return;
         }

         // display form values on success
         alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.referenceForm.value, null, 4));
     }


     onReset() {
         this.submitted = false;
         //this.referenceForm.reset();
         this.operation='';
     }


     loadReferences(){
  this.referenceService.afficherReferences().subscribe(
  data=>{this.references = data
  console.log('data',data)},
    error=>{console.log('erreur')},
    ()=>{console.log('chargement des references')}
      );
    }


    addReference(){
  const ref  = this.referenceForm.value;
  this.referenceService.ajouterReference(ref).subscribe(
      res=>{
             this.initReference();
             this.loadReferences();}
          );
  }


   removeReference(){
       console.log('-----reference---',this.selectedReference);
     this.referenceService.supprimerReference(this.selectedReference).subscribe(
     res=>{this.loadReferences();
           this.operation='';}
       );
     }


    updateReference(){
      const ref  = this.referenceForm.value;
      this.referenceService.modifierReference(this.selectedReference).subscribe(
        res=>{
               this.initReference();
               this.loadReferences();
               this.operation='';

             }
      );
   }



    initReference(){
      this.selectedReference=new ReferenceModel();
      this.createForm();
    }






}
