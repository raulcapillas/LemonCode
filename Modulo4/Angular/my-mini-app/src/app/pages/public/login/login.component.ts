import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../../auth/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { namesRoutes } from '../../../routing.module';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { MenuComponent } from '../../../layout/menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    FooterComponent,
    MenuComponent,
  ],
})
export class LoginComponent {
  public loginValid: boolean = true;

  public email = '';
  public password = '';

  constructor(private _router: Router, private _authService: AuthService) {
    if(this._authService.isLogged()) {
      this._router.navigate(['/dashboard']);
    }
  }

  public onSubmit(): void {
    if (this._authService.login(this.email, this.password)) {
      this.loginValid = true;
      this._router.navigate([`/${namesRoutes.dashboard}`]);
    } else {
      this.loginValid = false;
    }
  }
}
