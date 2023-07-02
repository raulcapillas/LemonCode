import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Botton';

  clickListener() {
    console.log("button clicker!");
  }

  searchListener () {
    console.log("Lupa clicker!");
  }
}
