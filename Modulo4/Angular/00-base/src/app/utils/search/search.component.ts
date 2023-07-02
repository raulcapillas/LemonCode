import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

  
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() label = 'Search...';
  @Output() clickenlupa: EventEmitter<string> = new EventEmitter();
  @Output() searchChaned: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLupa() {
    this.clickenlupa.emit('cosas');
  }

}
