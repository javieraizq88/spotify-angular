import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';
import { TracksModule } from '../../../modules/tracks/tracks.module';
import { Subscription } from 'rxjs'; //proramacion reactiva
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
  ],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.less'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: any =
    {
      cover: "",
      album: "asd",
      name: "BEBE",
      url: "http://localhost/track.mp3",
      _id: 1
    }
  listaObservadores$: Array<Subscription> = []

  constructor(private multimediaServices: MultimediaService) { }
  // primer ciclo de vida del constructor
  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaServices.callback.subscribe(
      // la respuesta tiene q ser un track de TracksModule
      (response: TracksModule) => {
        console.log("recibiendo cancion", response);
      }
    )

    this.listaObservadores$ = [observer1$]
  }

  // ultimo a ejecutarse antes de destruir el componente
  ngOnDestroy(): void {
    this.listaObservadores$.forEach(u => u.unsubscribe());
  }

}
