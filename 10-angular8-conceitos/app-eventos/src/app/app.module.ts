import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { HomeComponent } from './components/page/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './components/page/usuarios/usuarios.component';
import { ListaEventosComponent } from './components/page/eventos/lista/eventos.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NovoEventoComponent } from './components/page/eventos/novo/novo.component';
import { FormsModule } from '@angular/forms';
import { VerEventoComponent } from './components/page/eventos/ver/ver.component';
import { EditarEventoComponent } from './components/page/eventos/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosComponent,
    ListaEventosComponent,
    NotFoundComponent,
    NovoEventoComponent,
    VerEventoComponent,
    EditarEventoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
