// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../auth/auth.service.ts.service';
import { login, loginSuccess, loginFailure } from './auth.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions, 
    private authService: AuthService,
    private router: Router
) {}

login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) => {
        console.log('Login action received', action);
        return this.authService.validateCredentials(action.username, action.password).pipe(
          map((user) => {
            console.log('User validated:', user);
            return loginSuccess({ user, userRole: user.role });
          }),
          catchError((error) => {
            console.log('Error in authentication:', error);
            return of(loginFailure({ error: 'Invalid credentials' }));
          })
        );
      })
    )
  );
  
  redirectAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(({ userRole }) => {
            console.log('Attempting to navigate for role:', userRole);
            if (userRole === 'admin') {
              this.router.navigate(['/admin']).then(success => console.log('Navigation to admin:', success));
            } else if (userRole === 'user') {
              this.router.navigate(['/user']).then(success => console.log('Navigation to user:', success));
            }
        })
      ),
    { dispatch: false }
  );
  
  
}
