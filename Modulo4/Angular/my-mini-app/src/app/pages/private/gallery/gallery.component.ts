import { Component } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { MenuComponent } from '../../../layout/menu/menu.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  standalone: true,
  imports: [FooterComponent, MenuComponent]
})
export class GalleryComponent {

}
