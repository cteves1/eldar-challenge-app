import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
//NgRx
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthError } from '../auth/auth.selectors';
import { login } from '../auth/auth.actions';
//PrimeNG components
import { CheckboxModule } from 'primeng/checkbox';
import { Button, ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: `
    .text-red {
      color: red
    }
  `,
  standalone: true,
  imports: [
    //Angular core
    AsyncPipe,
    ReactiveFormsModule,
    FormsModule,
    //PrimeNG components
    CheckboxModule,
    ButtonModule,
    Button,
    InputGroupModule,
    RippleModule
  ]
})
export class LoginComponent {

  loginForm: FormGroup;
  authError$: Observable<string | null>;
  
  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {

  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  this.authError$ = this.store.select(selectAuthError);

  } // Fin del contructor

  login(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.store.dispatch(login({ username, password }));
    }
  }
}
