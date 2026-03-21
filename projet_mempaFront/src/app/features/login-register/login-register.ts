import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-register.html',
  styleUrl: './login-register.css'
})
export class LoginRegister {
  login = '';
  pass = '';
  message = '';
  isRegisterMode = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.message = '';
  }

  submit() {
    if (!this.login || !this.pass) {
      this.message = 'Veuillez remplir tous les champs.';
      return;
    }

    const action$ = this.isRegisterMode
      ? this.authService.register(this.login, this.pass)
      : this.authService.login(this.login, this.pass);

    action$.subscribe({
      next: () => this.router.navigate(['/']),
      error: () => this.message = 'Identifiants incorrects ou compte déjà existant.'
    });
  }
}
