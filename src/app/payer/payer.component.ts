import { Component, OnInit } from '@angular/core';
declare let  $: any;
declare var jQuery: any;
@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.scss']
})
export class PayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function($) {
      'use strict';
    
      // Selectmenu
      $('select').selectmenu();
      
    }(jQuery));
    

  }

}
