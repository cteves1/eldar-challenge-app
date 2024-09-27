// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserRole } from '../../../core/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  currentRole$: Observable<string | null>;

  constructor(
    private http: HttpClient,
    private store: Store
  ) {
    this.currentRole$ = this.store.select(selectUserRole);
  }

  getCurrentRole(): Observable<string | null> {
    return this.currentRole$;
  }
  
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
