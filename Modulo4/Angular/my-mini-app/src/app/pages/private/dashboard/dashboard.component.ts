import { Component } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { PrivateMenuComponent } from '../../../layout/private-menu/private-menu.component';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [FooterComponent, PrivateMenuComponent],
})
export class DashboardComponent {
  username = '';

  constructor(private _authService: AuthService) {
    this.username = this._authService.getUsername();
  }
}
