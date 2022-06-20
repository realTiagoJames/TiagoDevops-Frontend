import { FalarComVendasComponent } from './views/views-main/falar-com-vendas/falar-com-vendas.component';
import { AtendimentoAoClienteComponent } from './views/views-main/atendimento-ao-cliente/atendimento-ao-cliente.component';
import { CloudComponent } from './views/views-main/cloud/cloud.component';
import { ContatoComponent } from './views/views-main/contato/contato.component';
import { CriacaoSistemasComponent } from './views/views-main/criacao-sistemas/criacao-sistemas.component';
import { CriacaoWebsitesComponent } from './views/views-main/criacao-websites/criacao-websites.component';
import { HomeComponent } from './views/home/home.component';
import { InsightsComponent } from './views/views-main/insights/insights.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicosComponent } from './views/views-main/servicos/servicos.component';

const routes: Routes = [

  { path:'', component: HomeComponent  },
  { path:'atendimento-ao-cliente', component: AtendimentoAoClienteComponent},
  { path:'falar-com-vendas', component: FalarComVendasComponent},
  { path:'cloud', component: CloudComponent},
  { path:'insights', component: InsightsComponent},
  { path:'criação-de-sistemas', component: CriacaoSistemasComponent},
  { path:'criação-de-websites', component: CriacaoWebsitesComponent},
  { path:'serviços', component: ServicosComponent},
  { path:'contato', component: ContatoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
