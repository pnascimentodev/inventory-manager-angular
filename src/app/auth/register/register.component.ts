import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  form = {
    username: '',
    password: '',
    userType: ''
  };

  showError = false;
  showSuccess = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    if (!this.form.username || !this.form.password || !this.form.userType) {
      this.showError = true;
      this.errorMessage = 'Todos os campos são obrigatórios.';
      return;
    }

    const request = {
      username: this.form.username,
      password: this.form.password,
      role: this.form.userType.toUpperCase()
    };

    this.authService.register(request).subscribe({
      next: (response: string) => {
        this.showError = false;
        this.showSuccess = true;
        this.successMessage = response || 'Usuário registrado com sucesso! Redirecionando...';
        
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (error) => {
        this.showError = true;
        this.showSuccess = false;
        if (error.error && typeof error.error === 'string') {
          this.errorMessage = error.error;
        } else {
          this.errorMessage = 'Erro ao registrar usuário. Tente novamente.';
        }
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
