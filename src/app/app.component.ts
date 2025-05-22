import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // corrigido aqui: era `styleUrl`, o correto é `styleUrls`
})
export class AppComponent {
  title = 'inventory-manager-angular';

  form = {
    username: '',
    password: '',
    userType: ''
  };

  showError = false;

  onSubmit() {
    if (!this.form.username || !this.form.password || !this.form.userType) {
      this.showError = true;
    } else {
      this.showError = false;
      console.log('Formulário enviado:', this.form);
      // Aqui você pode redirecionar ou exibir uma mensagem de sucesso futuramente
    }
  }

  goToLogin() {
    console.log('Navegar para tela de login');
    // Você pode usar Router aqui futuramente
  }
}
