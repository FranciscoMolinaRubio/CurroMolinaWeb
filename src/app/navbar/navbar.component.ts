import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  // Propiedad que controla si la barra de navegación está colapsada o no
  isNavbarCollapsed = true;

  // Método para colapsar la barra de navegación
  collapseNavbar() {
    this.isNavbarCollapsed = true;
  }
}

