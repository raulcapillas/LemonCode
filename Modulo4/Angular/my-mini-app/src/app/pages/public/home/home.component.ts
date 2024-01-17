import { Component } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { MenuComponent } from '../../../layout/menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [FooterComponent, MenuComponent]
})
export class HomeComponent {

}
