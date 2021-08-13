import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../interfaces/evento';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class WebserviceService {
  // urlEnvCRUD: string = environment.urlCRUD;
  // urlEnvList: string = environment.urlList;

  urlCRUD: string = 'http://localhost:3200/evento';
  urlList: string = 'http://localhost:3200/eventos';
  urlUsers: string = 'https://api.github.com/users/samantafluture/followers';

  constructor(private http: HttpClient) {}

  public getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.urlList);
  }

  public getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlUsers);
  }

}
