import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  onSubmit(): void {
    if (!this.form.username || !this.form.password || !this.form.userType) {
      this.showError = true;
      return;
    }
    
    // Aqui você implementará a lógica de registro
    console.log('Formulário enviado:', this.form);
    this.showError = false;
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
