
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CloudComponent } from './views/views-main/cloud/cloud.component';
import { ContatoComponent } from './views/views-main/contato/contato.component';
import { CriacaoSistemasComponent } from './views/views-main/criacao-sistemas/criacao-sistemas.component';
import { CriacaoWebsitesComponent } from './views/views-main/criacao-websites/criacao-websites.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './components/templates/menu/menu.component';
import { NgModule } from '@angular/core';
import { ServicosComponent } from './views/views-main/servicos/servicos.component';
import { InsightsComponent } from './views/views-main/insights/insights.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ServicosComponent,
    ContatoComponent,
    CloudComponent,
    CriacaoWebsitesComponent,
    CriacaoSistemasComponent,
    FooterComponent,
    InsightsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
