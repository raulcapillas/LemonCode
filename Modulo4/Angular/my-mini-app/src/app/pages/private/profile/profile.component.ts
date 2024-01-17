import { Component } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { PrivateMenuComponent } from '../../../layout/private-menu/private-menu.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true,
  imports: [FooterComponent, PrivateMenuComponent],
})
export class ProfileComponent {}
