import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO: Programacion reactiva!
import { TracksModule } from '../../../modules/tracks/tracks.module';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.less']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  listObservers$: Array<Subscription> = []


  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  state: string = 'paused'


  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!');
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event // coordenada de la posición donde se hace click dentro de la barra de progreso
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - px donde inicia la barra de progreso
    const percentageFromX = (clickX * 100) / width // muestra el  porcentaje de avance donde estoy haciendo click en la barra de progreso
    console.log(`Click(x): ${percentageFromX}`);
    this.multimediaService.seekAudio(percentageFromX)

  }


}
