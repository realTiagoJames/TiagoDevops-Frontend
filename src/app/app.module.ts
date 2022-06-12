import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/templates/main/main.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { ServicosComponent } from './views/views-main/servicos/servicos.component';
import { ContatoComponent } from './views/views-main/contato/contato.component';
import { CloudComponent } from './views/views-main/cloud/cloud.component';
import { CriacaoWebsitesComponent } from './views/views-main/criacao-websites/criacao-websites.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    MenuComponent,
    ServicosComponent,
    ContatoComponent,
    CloudComponent,
    CriacaoWebsitesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
