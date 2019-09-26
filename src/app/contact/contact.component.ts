import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



import{MessageModel}from'../model/message.model';
import{ContactService}from'../contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;
  message: MessageModel;

 constructor(private formBuilder: FormBuilder,private contactService:ContactService) {}


ngOnInit() {
  this.contactForm = this.formBuilder.group({
        titre: ['', Validators.required],
        nom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required],
        //acceptTerms: [false, Validators.requiredTrue]
    }, {
      //  validator: MustMatch('password', 'confirmPassword')
    });
}

 get f() { return this.contactForm.controls; }

 onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.contactForm.reset();
    }

    addMessage(){
     const mes  = this.contactForm.value;
      this.contactService.ajouterMessage(mes).subscribe(
      res=>{this.onReset();}
          );
  }




}
