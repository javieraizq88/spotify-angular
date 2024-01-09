import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  // TODO: envía al contenedor padre lo que se escribe en el input
  @Output() callbackData: EventEmitter<any> = new EventEmitter()

  src: string = '' // TODO: ngModel que viene del search html

  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term: string): void { // ngModel que captura el onChange
    if (term.length >= 3) { // TODO: dispara el evento cuando los caracteres son >= 3
      this.callbackData.emit(term)
      console.log('🔴 Llamamos a nuestra API HTTP GET---> ', term);
    }
  }

}
