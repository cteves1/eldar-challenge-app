// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated, selectUserRole } from '../auth/auth.selectors';
import { Observable, map, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated).pipe(
      take(1),
      map((isAuthenticated) => isAuthenticated),
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectUserRole).pipe(
      take(1),
      map((role) => role === 'admin'),
      tap((isAdmin) => {
        if (!isAdmin) {
          this.router.navigate(['/unauthorized']);
        }
      })
    );
  }
}
