import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from'@angular/forms';

import { MessageService } from'../message/message.service';
import  {MessageModel }from'../model/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

messages : MessageModel[];
message  : MessageModel;

messageForm:FormGroup;

selectedMessage :MessageModel;
operation : string='';

  constructor(private messageService:MessageService,private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.loadMessages();
    this.initMessage();
  }

  createForm(){
   this.messageForm = this.formBuilder.group({
      nom: [''],
      email: [''],
      message: [''],
      date: ['']
        });
      }

  onReset() {
          this.operation='';
          this.messageForm.reset();
      }

  initMessages(){
        this.selectedMessage=new MessageModel();
       this.createForm();
      }

  loadMessages(){
    this.messageService.afficherMessages().subscribe(
    data=>{this.messages = data
    console.log('data',data)},
    error=>{console.log('erreur')},
      ()=>{console.log('chargement des messages')}
     );
   }
  removeMessage(){
    this.messageService.supprimerMessage(this.selectedMessage).subscribe(
      res=>{this.onReset();
            this.operation='';
            this.loadMessages();
            }
    );
  }


  initMessage(){
    this.selectedMessage=new MessageModel();
    this.createForm();
  }




}
