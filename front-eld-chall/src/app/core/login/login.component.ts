// login.component.ts
import { Component, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service.ts.service';
import { Router } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FloatLabelModule, InputGroupModule, InputGroupAddonModule, ButtonModule]

})
export class LoginComponent {
  @Input({required: true, alias: 'email'}) email: string = '';

  @Input({required: true, alias: 'password'}) password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']), // Redirige al usuario a otra ruta tras iniciar sesión
      error: (err) => console.error('Login failed', err)
    });
  }
}
