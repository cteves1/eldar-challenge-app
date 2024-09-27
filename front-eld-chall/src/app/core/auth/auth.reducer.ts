// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.model';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state) => ({ ...state, error: null })),
  on(loginSuccess, (state, { user, userRole }) => ({
    ...state,
    isAuthenticated: true,
    user,
    userRole,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    userRole: null,
    error,
  })),
  on(logout, () => initialAuthState)
);
