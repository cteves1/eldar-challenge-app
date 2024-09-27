// app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

// Importa tus reducers y efectos
import { authReducer } from './core/auth/auth.reducer';
import { AuthEffects } from './core/auth/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    
    // Configuración de NgRx Store con reducers
    provideStore({
      auth: authReducer, // asegúrate de importar correctamente tu reducer
    }),

    // Configuración de NgRx Effects
    provideEffects([AuthEffects]),

    // (Opcional) Devtools para depurar el estado en desarrollo
    provideStoreDevtools(),
  ]
};
