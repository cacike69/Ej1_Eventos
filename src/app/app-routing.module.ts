import { AltaEventoComponent } from './eventos/alta-evento/alta-evento.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { EventosComponent } from './eventos/eventos.component';
import { BannerComponent } from './Banner/Banner.component';
import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ModificarEventoComponent } from './eventos/modificar-evento/modificar-evento.component';




const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'eventos', component: EventosComponent },
{path: 'quienes-somos', component: QuienesSomosComponent},
{path: 'alta-evento', component: AltaEventoComponent},
{path: 'modificar-evento', component: ModificarEventoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
