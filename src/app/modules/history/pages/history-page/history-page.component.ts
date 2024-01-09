import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.less']
})
export class HistoryPageComponent implements OnInit {

  listResults$: Observable<any> = of([]) // TODO: muestra los resultados de busqueda segun lo escrito en el input

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
    //TODO: toma el termino y solo se ejecuta cunado tiene 3 caracters
    console.log('🎁 Estoy en el contenedor history page desde el search component', event);
    this.listResults$ = this.searchService.searchTracks$(event)
  }
}
