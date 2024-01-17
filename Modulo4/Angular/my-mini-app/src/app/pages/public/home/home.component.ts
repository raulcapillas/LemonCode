import { Component } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { PublicMenuComponent } from '../../../layout/public-menu/public-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [FooterComponent, PublicMenuComponent],
})
export class HomeComponent {}
