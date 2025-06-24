import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getCategorias(limit: number = 100, offset: number = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/categorias?limit=${limit}&offset=${offset}`);
  }

  getUsuarios(limit: number = 100, offset: number = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios?limit=${limit}&offset=${offset}`);
  }

  getEspecies(limit: number = 100, offset: number = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/especies?limit=${limit}&offset=${offset}`);
  }
  
  getNoticias(limit: number = 100, offset: number = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/noticias?limit=${limit}&offset=${offset}`);
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


  obtenerPerfil(): number | null {
  const token = this.obtenerToken();
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.id_perfil;
  }


  esAdmin(): boolean {
    return this.obtenerPerfil() === 0;
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


  // ==========================
  // ==========================
  // ====== CRUD (ADMIN) ======
  // ==========================
  // ==========================

  // ==========================
  // CATEGORÍAS (ADMIN)
  // ==========================

  crearCategoria(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/categorias`, data, this.getAuthHeaders());
  }

  actualizarCategoria(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/admin/categorias/${id}`, data, this.getAuthHeaders());
  }

  eliminarCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admin/categorias/${id}`, this.getAuthHeaders());
  }

  // ==========================
  // ESPECIES (ADMIN)
  // ==========================

  crearEspecie(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/especies`, data, this.getAuthHeaders());
  }

  actualizarEspecie(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/admin/especies/${id}`, data, this.getAuthHeaders());
  }

  eliminarEspecie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admin/especies/${id}`, this.getAuthHeaders());
  }

  // ==========================
  // NOTICIAS (ADMIN)
  // ==========================

  crearNoticia(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/noticias`, data, this.getAuthHeaders());
  }

  actualizarNoticia(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/admin/noticias/${id}`, data, this.getAuthHeaders());
  }

  eliminarNoticia(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admin/noticias/${id}`, this.getAuthHeaders());
  }

  // ==========================
  // HEADERS CON JWT
  // ==========================

  private getAuthHeaders() {
    const token = this.obtenerToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return { headers };
  }
}