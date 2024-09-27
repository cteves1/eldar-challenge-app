// auth.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.model';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectUserRole = createSelector(
  selectAuthState,
  (state) => state.userRole
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error
);

export const selectCurrentUser = createSelector(
  selectAuthState,
  (state) => state.user
)