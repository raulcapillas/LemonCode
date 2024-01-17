import { Component } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { PrivateMenuComponent } from '../../../layout/private-menu/private-menu.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  standalone: true,
  imports: [FooterComponent, PrivateMenuComponent]
})
export class GalleryComponent {

}
