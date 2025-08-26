import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '@tik-talk/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  public readonly authService = inject(AuthService);
  public readonly router = inject(Router);
  public readonly fb = new FormBuilder();

  public readonly form = this.fb.nonNullable.group({
    username: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  public isPasswordVisible = signal<boolean>(false);

  public onSubmit() {
    if (this.form.valid) {
      this.authService
        .login(this.form.getRawValue())
        .subscribe(() => this.router.navigate(['']));
    }
  }
}
