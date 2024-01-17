import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { namesRoutes } from '../../routing.module';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './private-menu.component.html',
  styleUrl: './private-menu.component.scss',
})
export class PrivateMenuComponent {
  username = this._authService.getUsername();
  isLogged: boolean = false;

  publicMenu = [
    {
      title: 'Home',
      link: [`/${namesRoutes.home}`],
    },
    {
      title: 'Login',
      link: [`/${namesRoutes.login}`],
    },
    {
      title: 'About',
      link: [`/${namesRoutes.about}`],
    },
  ];

  privateMenu = [
    {
      title: 'Dashboard',
      link: [`/${namesRoutes.dashboard}`],
    },
    {
      title: 'Galería',
      link: [`/${namesRoutes.gallery}`],
    },
    {
      title: 'CRUD',
      link: [`/${namesRoutes.crud}`],
    },
    {
      title: 'Profile',
      link: [`/${namesRoutes.profile}`],
    },
  ];

  constructor(private _router: Router, private _authService: AuthService) {
    this.isLogged = this._authService.isLogged();
  }

  logOut() {
    this._authService.logout();
  }
}
