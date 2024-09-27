// app-routing.module.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AdminComponent } from './features/admin/admin.component';
import { UserComponent } from './features/user/user.component';
import { AuthGuard, AdminGuard } from './core/guards/auth.guard.ts.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];