import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


/* ***Content*** */

@Component({
  selector: 'app-activite-gouvernement-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Pôle e-Governement</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>
      Produits Transverses :<br>
•	Plateformes de digitalisation et de dématérialistaion <br>
•	Plateformes Workflow<br>
•	Plateformes d’échange de données<br>
•	Système de Gestion Electronique des Documents (GED)<br>
•	Solutions d’authentification forte et de signature électronique<br>
•	Plateformes de paiement électronique<br>
•	Produits digitaux spécifiques<br>
•	Solutions Open Gov<br>
•	Solutions Guichet Uniques Electroniques<br>
•	Solutions SIG Web (Système d’Information Géographique)<br>
•	Systèmes BI-BIG DATA<br><br>

  Solutions - Domaine de l’Eau :<br>
•	Systèmes de Getsion Intégrée des Ressources en Eau <br>
•	Système agrégé de l’eau pour l’aide à la décision<br>
•	Système de publication et de suivi des données relatives au réseau de Collecte des Données Hydrologiques en Temps Réel et d'Annonce des Crues <br>
•	Système d’information pour le suivi et l’évaluation de l’exploitation et de la gestion des Systèmes d’Alimentation de l’Eau Potable (SAEP) en milieu rural <br>
•	Système de gestion visualisation des données hydrologiques des stations de mesure et de télétransmission au niveau des barrages<br><br>

    Solutions – Bonne Gouvernance :<br>
•	Plateforme de Communication et de Facilitation de l’accès à l’information <br>
•	Plateforme collaborative d’appui à l’investissement<br>
•	Système de gestion et de suivi des investissements  <br><br>

 Solutions – Formation Professionelle :<br>
•	Bilan Pédagogiques et Financier en ligne
•	Système de Gestion des Outils de la Formation Continue

      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ActiviteContentGouvernement {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

/* ContentFinace */
@Component({
  selector: 'app-activite-finance-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Pôle e-Finance (Marché Financier)</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>
       A cet effet, les produits financiers sont de plus en plus rapidement accessibles sous formes électroniques. En modifiant la facon dont les services fianancier sont utlisés,
       le pole e-Finance impose une normalisation accélère les processus et réduit les couts.<br>
      BNS-ENGINEERING met en œuvre une large gamme des produits financiers qui répondent aux exigences du marché,
      à savoir la conception, le développement et la mise en œuvre d’ERP d’intermédiation boursière,
      de lateformes de traising électroniques boursier,
      de salle de marché et des services titre des banques ainsi que les plateformes de paimenet électronique.<br><br>

    Produits & Solutions :<br>
•	Global Trading Boursier : Solutions d’intermidation boursière<br>
•	Plateforme de Bourse en Ligne<br>
•	Produits digitaux spécifiques<br>
•	Solution de Routage et de gestion du flux du marché<br>
•	Salle de Marché Académique<br>

      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ActiviteContentFinance {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}


/* ContentBusiness */
@Component({
  selector: 'app-activite-business-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Pôle e-Business (ERP Métiers)</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>
      Produits & Solutions :<br>
 •	Solutions en Commerce International : <br>
 o	Guichet Unique de Commerce Extérieur<br>
 o	Système Bancaire Etranger<br>
 o	Système d’Information de Contrôle Technique à l’Import et à l’Export <br>
 o	Système d’Information de Gestion de Fret Terrestre <br>
 o	Système d’Information des Affaires Maritimes <br>
 o	Système d’Information du Certificat d’Origine
 o	Système de paiement électronique des droits et taxes en Douane<br>
 o	Services en ligne : e-Manifeste ; e-Déclaration<br>
 o	Plateformes d’échange de données <br>
 o	Applications métier de gestion des opérations de commerce extérieur<br>
 o	Solutions Business Intelligence (BI), BI-BIG DATA en Commerce International<br><br>

 •	Progiciel de Getsion Intégrée : <br>
 o	Comptabilité Générale et Analytique, Gestion Financière, Budget<br>
 o	Ressources Humaines<br>
 o	Achats, Ventes<br>
 o	Aide à la décision<br>
 o	Archivage Electronique<br>

      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ActiviteContentBusiness {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

/* ContentConsuting */
@Component({
  selector: 'app-activite-consuting-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">BNS CONSULTING -TRAINING</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>
      Aussi bien BNS-ENGINEERING propse une palette de cycles de formation couvrant l’ensemble des supports d’activités permettant de se former à la fois plus rapidement et plus efficacement.
  <br><br>

  •	Réalisation de Schémas Directeurs Informatiques<br>
  •	Audit de Systèmes d’Information<br>
  •	Réingénierie des processus et mise à niveau organisationnelle<br><br>
  BNS ENGINEERING a mené plusieurs missions pour la réingénierie des processus et la mise à niveau organisationnelle de structures intervenantes dans le commerce international.<br>
  •	Etudes Stratégiques et Techniques de transformation digitale<br>
  Réalisation d’études stratégiques et techniques ainsi que de plans directeurs pour assurer la transformation digitale dans plusieurs secteurs (e-Finance, Banque, Commerce International, Microassurance, ….).<br>
  BNS ENGINEERING a focalisé une bonne partie de son activité sur l’étude, <br>
  la conception et le développement de solutions de dématérialisation et de transformation digitale, s’appuyant sur un socle technologique de pointe, une plateforme Workflow, un système GED de numérisation et d’archivage de documents et un système Business Intelligence (BI) d’aide à la décision. BNS ENGINEERING a développé un centre de compétences regroupant des ingénieurs informaticiens maîtrisant les méthodes et les outils de développement de solutions d’entreprise et d'applications Web/EDI ainsi que de solutions orientées service et des consultants spécialisés dans le domaine d'amélioration des   services   de   l'administration   moyennant   les   nouvelles   technologies   de   l'information   et   de communication.<br>
  •	Etudes en Facilitation du Commerce Extérieur et des Transport et Conception de Systèmes d’Information de Commerce International et de Dédouanement<br>
  BNS ENGINEERING dispose d’une solide expérience en matière de mise en place de guichets uniques électroniques depuis l’étude et la conception des procédures du commerce extérieur, passant par la mise en place de la plateforme jusqu’à l’opérationnalisation et la gestion du système ; en particulier :<br><br>
  o La simplification, l'harmonisation et la normalisation des formulaires exigés par les différents organismes et administrations, lors de l'accomplissement des formalités administratives liées au passage des marchandises par les plateformes logistiques. L’homogénéisation de l’ensemble des documents et la standardisation des données (alignement par référence aux normes UN/CEE et ISO) est un élément essentiel pour l’interopérabilité des systèmes ;<br>
  o	La conception des messages nécessaires à l'instauration de liaisons d'échanges d'informations par voie électronique entre tous les intervenants de la chaîne commerciale, transport, logistique et financière, impliqués dans les opérations d'importation et d'exportation (Douanes, Transporteurs, Exportateurs-Importateurs, Transitaires, Manutentionnaires, Banques, ……) ;<br>
  o	La dématérialisation des échanges d'information, c'est à dire la suppression progressive des documents papier et des caractéristiques reliées (en termes de preuve, d'authentification et de confidentialité) ;<br>
  o	La mise en relation de tous les maillons de la chaîne du commerce extérieur afin de favoriser l’échange de données dématérialisées (sans papier) de manière à ce que les processus soient accomplis avec la célérité attendue par un Guichet Unique Électronique ;<br>
  o	La préparation de l’environnement juridique adéquat ;<br>
  o	La mise à niveau des systèmes d’information de tous les acteurs du commerce extérieur.

      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ActiviteContentConsulting {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}



/* ***Component*** */

@Component({
  selector: 'app-activite-component',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css'],

})
export class ActiviteComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  openGouvernement() {
    const modalRef = this.modalService.open(ActiviteContentGouvernement);
    modalRef.componentInstance.name = 'World';
  }

  openFinance(){
    const modalRef = this.modalService.open(ActiviteContentFinance);
    modalRef.componentInstance.name = 'World';
  }

  openBusiness(){
    const modalRef = this.modalService.open(ActiviteContentBusiness);
    modalRef.componentInstance.name = 'World';
  }

  openConsulting(){
    const modalRef = this.modalService.open(ActiviteContentConsulting);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit() { }

}
