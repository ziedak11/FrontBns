import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ReferenceComponent } from './reference/reference.component';
import { AproposComponent } from './apropos/apropos.component';
import { ActiviteComponent , ActiviteContentGouvernement , ActiviteContentFinance, ActiviteContentBusiness , ActiviteContentConsulting } from './activite/activite.component';
import { MethodologieComponent } from './methodologie/methodologie.component';
import { ProduitComponent } from './produit/produit.component';
import { NavbarComponent, NavbarContentConnecter } from './navbar/navbar.component';
import { ReferenceService } from './reference/reference.service';
import { ContactService } from './contact/contact.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message/message.service';
import { ModalComponent } from './modal/modal.component';
import { ReferencesComponent } from './references/references.component';
import { ComposantTestComponent, ComposantTestContent } from './composant-test/composant-test.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';





@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ReferenceComponent,
    AproposComponent,
    ActiviteComponent,
    ActiviteContentGouvernement,
    ActiviteContentFinance,
    ActiviteContentBusiness,
    ActiviteContentConsulting,
    MethodologieComponent,
    ProduitComponent,
    NavbarComponent,
    NavbarContentConnecter,
    MessageComponent,
    ModalComponent,
    ReferencesComponent,
    ComposantTestComponent,
    ComposantTestContent,
    LoginComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
    NgbModule,
    ModalModule.forRoot(),

  ],
  exports: [ComposantTestComponent, ActiviteComponent],
  providers: [ReferenceService, ContactService, MessageService ],
  bootstrap: [AppComponent, ComposantTestComponent , ActiviteComponent , NavbarComponent],
  entryComponents: [ComposantTestContent, ActiviteContentGouvernement , ActiviteContentFinance , ActiviteContentBusiness, ActiviteContentConsulting, NavbarContentConnecter]
})
export class AppModule { }
