import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private router: Router) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {}

  public onSubmit(): void {
    this.loginValid = true;
  }
}
