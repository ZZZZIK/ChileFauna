import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  // === NUEVAS FUNCIONES PARA AUTENTICACIÓN JWT (Node.js) ===

  login(credenciales: { correo: string; contrasena: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, credenciales);
  }

  registro(usuario: {
    correo: string;
    contrasena: string;
    nomUsuario: string;
    id_perfil: number;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/registro`, usuario);
  }

  guardarToken(token: string) {
    localStorage.setItem('token', token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }


  validarToken(): Observable<any> {
    const token = this.obtenerToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/auth/validar`, { headers });
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    window.location.reload(); // o router.navigate(['/tab4']);
  }

  estaLogueado(): boolean {
  return !!localStorage.getItem('token');
  }

}