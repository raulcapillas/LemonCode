import { Component } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { MenuComponent } from '../../../layout/menu/menu.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
  standalone: true,
  imports: [FooterComponent, MenuComponent]
})
export class CrudComponent {}
