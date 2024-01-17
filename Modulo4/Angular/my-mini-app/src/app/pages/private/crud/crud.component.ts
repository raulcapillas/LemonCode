import { Component } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { PrivateMenuComponent } from '../../../layout/private-menu/private-menu.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
  standalone: true,
  imports: [FooterComponent, PrivateMenuComponent]
})
export class CrudComponent {}
