
ng generate component utils/search

*********************************

<div class="container">
    <input type="text" placeholder="Search..." class="field" />
    <div class="icons-container">
        <div class="icon-search"></div>
    </div>
  </div>

*********************************

.container {
      position: relative;
      padding: 0;
      margin: 0;
      border: 0;
      width: 150px;
      height: 30px;
    }
    
    .field {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
    
    .icons-container {
      position: absolute;
      top: 5px;
      right: -10px;
      width: 30px;
      height: 30px;
    }
    
    .icon-search {
      position: relative;
      width: 50%;
      height: 50%;
      opacity: 1;
      border-radius: 50%;
      border: 3px solid #c7d0f8;
    }
    
    .icon-search:after {
      content: "";
      position: absolute;
      bottom: -9px;
      right: -2px;
      width: 4px;
      border-radius: 3px;
      transform: rotate(-45deg);
      height: 10px;
      background-color: #c7d0f8;
    }   

*********************************

import { Component, Input, OnInit, Output } from '@angular/core';

  @Input() label = 'Search...';
  @Output() clickenlupa;
  @Output() searchChaned;

*********************************

@Output() clickenlupa: EventEmitter<string> = new EventEmitter();
  @Output() searchChaned: EventEmitter<string> = new EventEmitter();


*********************************
