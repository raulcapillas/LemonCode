import { Component } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { MenuComponent } from '../../../layout/menu/menu.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [FooterComponent, MenuComponent]
})
export class AboutComponent {}
