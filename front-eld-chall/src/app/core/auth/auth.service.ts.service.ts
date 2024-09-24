import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'https://your-api-url.com'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método de login que envía credenciales al backend
  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiURL}/login`, { email, password })
      .pipe(
        tap(response => {
          // Guardar el token en localStorage
          localStorage.setItem('access_token', response.token);
        })
      );
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token; // Devuelve true si el token existe
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('access_token'); // Eliminar el token
  }

  // Método para obtener el token
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
}
