
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AtendimentoAoClienteComponent } from './views/views-main/atendimento-ao-cliente/atendimento-ao-cliente.component';
import { AtendimentoFormComponent } from './components/templates/atendimento-form/atendimento-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CloudComponent } from './views/views-main/cloud/cloud.component';
import { ContatoComponent } from './views/views-main/contato/contato.component';
import { CriacaoSistemasComponent } from './views/views-main/criacao-sistemas/criacao-sistemas.component';
import { CriacaoWebsitesComponent } from './views/views-main/criacao-websites/criacao-websites.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { InsightsComponent } from './views/views-main/insights/insights.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './components/templates/menu/menu.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ServicosComponent } from './views/views-main/servicos/servicos.component';
import { FlexLayoutModule } from '@angular/flex-layout';



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
    InsightsComponent,
    NavComponent,
    AtendimentoAoClienteComponent,
    AtendimentoFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule,
    NgbModule,
    MatTabsModule,
    FlexLayoutModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
