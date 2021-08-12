import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './components/page/eventos/eventos.component';
import { HomeComponent } from './components/page/home/home.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { UsuariosComponent } from './components/page/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'eventos',
    component: EventosComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
