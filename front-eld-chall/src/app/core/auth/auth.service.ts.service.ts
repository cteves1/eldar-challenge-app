// auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  validateCredentials(username: string, password: string): Observable<any> {
    // Simulación de credenciales
    if (username === 'admin' && password === 'admin123') {
      return of({ username: 'admin', role: 'admin' });
    } else if (username === 'user' && password === 'user123') {
      return of({ username: 'user', role: 'user' });
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }
}
