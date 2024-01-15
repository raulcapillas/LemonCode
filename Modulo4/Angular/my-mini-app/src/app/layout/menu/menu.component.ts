import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})

export class MenuComponent {
  title = 'My mini App';

  menus = [
    {
      title: 'Home',
      link: ['/home'],
    },
    {
      title: 'Login',
      link: ['/login'],
    },
    {
      title: 'About',
      link: ['/about'],
    },
  ];

  constructor() {}
}
