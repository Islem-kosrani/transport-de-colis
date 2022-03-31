import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accueil0Component } from './accueil0/accueil0.component';
import { AvisComponent } from './avis/avis.component';
import { CguComponent } from './cgu/cgu.component';
import { ChercherlivreurComponent } from './chercherlivreur/chercherlivreur.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MissionsComponent } from './missions/missions.component';
import { MotpasseoublieComponent } from './motpasseoublie/motpasseoublie.component';
import { PayerComponent } from './payer/payer.component';
import { PolitiqueComponent } from './politique/politique.component';
import { ProfilComponent } from './profil/profil.component';
import { PublierComponent } from './publier/publier.component';
import { SuivreComponent } from './suivre/suivre.component';
import { SurveillerComponent } from './surveiller/surveiller.component';
import { UpdatemissionComponent } from './updatemission/updatemission.component';

const routes: Routes = [
 
  { path: "home", component: HomeComponent },
  
  { path: "dashboard", component: DashboardComponent },
  {path : "accueil0",component:Accueil0Component},
  {path:"inscription",component:InscriptionComponent},
  {path:"connexion",component:ConnexionComponent},
  {path:"surveiller",component:SurveillerComponent},
  {path:"profil",component:ProfilComponent},
  {path:"publier",component:PublierComponent},
  {path:"chercherlivreur",component:ChercherlivreurComponent},
  {path:"missions",component:MissionsComponent},
  {path:"details",component:DetailsComponent},
  {path:"updatemission",component:UpdatemissionComponent},
  {path:"motpasseoublie",component:MotpasseoublieComponent},
  {path:"cgu",component:CguComponent},
  {path:"politique",component:PolitiqueComponent},
  {path:"suivre",component:SuivreComponent},
  {path:"avis",component:AvisComponent},
  {path:"payer",component:PayerComponent},
{path:"consulter",component:ConsulterComponent},
  { path: '', redirectTo: 'accueil0', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
