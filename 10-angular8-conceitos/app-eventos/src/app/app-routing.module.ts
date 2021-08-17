import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEventoComponent } from './components/page/eventos/editar/editar.component';
import { ListaEventosComponent } from './components/page/eventos/lista/eventos.component';
import { NovoEventoComponent } from './components/page/eventos/novo/novo.component';
import { VerEventoComponent } from './components/page/eventos/ver/ver.component';
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
    component: ListaEventosComponent,
  },
  {
    path: 'eventos/novo',
    component: NovoEventoComponent,
  },
  {
    path: 'evento/:id',
    component: VerEventoComponent,
  },
  {
    path: 'evento/editar/:idEvento',  
    component: EditarEventoComponent,
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
