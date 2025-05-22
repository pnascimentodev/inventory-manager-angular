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
  isNotificationsOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleDropdown(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.isNotificationsOpen = false;
    }
  }

  toggleNotifications(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.isNotificationsOpen = !this.isNotificationsOpen;
    if (this.isNotificationsOpen) {
      this.isDropdownOpen = false;
    }
  }

  markAllAsRead(event: MouseEvent): void {
    event.stopPropagation();
    console.log('Marcando todas as notificações como lidas');
    // Implementar lógica para marcar todas como lidas
  }

  onMenuItemClick(action: string): void {
    switch (action) {
      case 'profile':
        console.log('Navegando para o perfil');
        break;
      case 'settings':
        console.log('Navegando para as configurações');
        break;
      case 'logout':
        this.router.navigate(['/login']);
        break;
    }
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const profileElement = target.closest('.user-profile');
    const notificationsElement = target.closest('.notifications');
    
    if (!profileElement) {
      this.isDropdownOpen = false;
    }
    if (!notificationsElement) {
      this.isNotificationsOpen = false;
    }
  }
}
