import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Accueil0Component } from './accueil0/accueil0.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SurveillerComponent } from './surveiller/surveiller.component';
import { ProfilComponent } from './profil/profil.component';
import { PublierComponent } from './publier/publier.component';
import { ChercherlivreurComponent } from './chercherlivreur/chercherlivreur.component';
import { MissionsComponent } from './missions/missions.component';
import { DetailsComponent } from './details/details.component';
import { UpdatemissionComponent } from './updatemission/updatemission.component';
import { MotpasseoublieComponent } from './motpasseoublie/motpasseoublie.component';
import { CguComponent } from './cgu/cgu.component';
import { PolitiqueComponent } from './politique/politique.component';
import { SuivreComponent } from './suivre/suivre.component';
import { AvisComponent } from './avis/avis.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayerComponent } from './payer/payer.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsulterComponent } from './consulter/consulter.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    Accueil0Component,
    InscriptionComponent,
    ConnexionComponent,
    SurveillerComponent,
    ProfilComponent,
    PublierComponent,
    ChercherlivreurComponent,
    MissionsComponent,
   DetailsComponent,
   UpdatemissionComponent,
   MotpasseoublieComponent,
   CguComponent,
   PolitiqueComponent,
   SuivreComponent,
   AvisComponent,
   PayerComponent,
   ConsulterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
