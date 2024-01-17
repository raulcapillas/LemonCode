import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../../auth/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
  ],
})
export class LoginComponent {
  public loginValid: boolean = true;

  public email = '';
  public password = '';

  constructor(private _router: Router, private _authService: AuthService) {}

  public onSubmit(): void {
    if (this._authService.login(this.email, this.password)) {
      alert('Login successful');
      //this._router.navigate(['/home']);
    } else {
      alert('Login failed');
      this.loginValid = false;
      //this.loginValid = false;
    }
  }
}
