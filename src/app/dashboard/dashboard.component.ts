import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isDropdownOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onMenuItemClick(action: string): void {
    switch (action) {
      case 'profile':
        // Navegar para o perfil
        console.log('Navegando para o perfil');
        break;
      case 'settings':
        // Navegar para as configurações
        console.log('Navegando para as configurações');
        break;
      case 'logout':
        // Fazer logout e navegar para a página de login
        this.router.navigate(['/login']);
        break;
    }
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const profileElement = (event.target as HTMLElement).closest('.user-profile');
    if (!profileElement) {
      this.isDropdownOpen = false;
    }
  }
}
