import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';

import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './Banner/Banner.component';
import { EventosComponent } from './eventos/eventos.component';
import { AltaEventoComponent } from './eventos/alta-evento/alta-evento.component';
import { ModificarEventoComponent } from './eventos/modificar-evento/modificar-evento.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';







@NgModule({
  declarations: [
    AppComponent,

    InicioComponent,
      BannerComponent,
      EventosComponent,
      AltaEventoComponent,
      ModificarEventoComponent,
      QuienesSomosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
