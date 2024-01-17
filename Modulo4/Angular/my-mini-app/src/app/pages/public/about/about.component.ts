import { Component } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { PublicMenuComponent } from '../../../layout/public-menu/public-menu.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [FooterComponent, PublicMenuComponent],
})
export class AboutComponent {}
