import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get('http://localhost:3000/api/usuarios');
  }
}
