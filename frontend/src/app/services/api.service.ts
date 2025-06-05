import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8100';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categorias`);
  }
  
  getEspecies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/especies`);
  }

  getNoticias(): Observable<any> {
    return this.http.get(`${this.baseUrl}/noticias`);
  }

    getUsuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios`);
  }
}
