import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [FlexLayoutModule],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
