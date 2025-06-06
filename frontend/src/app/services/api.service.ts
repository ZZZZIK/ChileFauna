import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get('http://localhost/ChileFaunaAPI/get_categorias.php');
  }

  getEspecies(): Observable<any> {
    return this.http.get(`http://localhost/ChileFaunaAPI/get_especies.php`);
  }

  getNoticias(): Observable<any> {
    return this.http.get(`http://localhost/ChileFaunaAPI/get_noticias.php`);
  }

  getUsuarios(): Observable<any> {
    return this.http.get(`http://localhost/ChileFaunaAPI/get_usuarios.php`);
  }
}
