import { ContatoComponent } from './views/views-main/contato/contato.component';
import { MainComponent } from './components/templates/main/main.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicosComponent } from './views/views-main/servicos/servicos.component';

const routes: Routes = [
  { path:'serv', component: ServicosComponent},
  { path:'contato', component: ContatoComponent},
  {
    path: '',
    component: MainComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
