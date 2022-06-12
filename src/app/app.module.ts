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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    MenuComponent,
    ServicosComponent,
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
