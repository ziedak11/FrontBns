import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ActiviteComponent}from'./activite/activite.component';
import {AproposComponent}from'./apropos/apropos.component';
import {ContactComponent}from'./contact/contact.component';
import {MethodologieComponent} from './methodologie/methodologie.component';
import {ProduitComponent} from './produit/produit.component';
import {ReferenceComponent}from'./reference/reference.component';
import {MessageComponent}from'./message/message.component';
import {ModalComponent}from'./modal/modal.component';
import {ReferencesComponent}from'./references/references.component';
import {LoginComponent}from'./login/login.component';
import { ComposantTestComponent} from './composant-test/composant-test.component';


const routes: Routes = [{path:'contact', component:ContactComponent},
  {path:'activite', component:ActiviteComponent},
  {path:'apropos', component:AproposComponent},
  {path:'contact', component:ContactComponent},
  {path:'methodologie', component:MethodologieComponent},
  {path:'produit', component:ProduitComponent},
  {path:'reference', component:ReferenceComponent},
  {path:'message', component:MessageComponent},
  {path:'modal', component:ModalComponent},
  {path:'references', component:ReferencesComponent},
  {path:'produit', component:ProduitComponent},
  {path:'tests', component:ComposantTestComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:AproposComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
