import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { MultimediaService } from '../../services/multimedia.service';
import { TracksModule } from '../../../modules/tracks/tracks.module';

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
export class MediaPlayerComponent implements OnInit {
  mockCover: any =
    {
      cover: "",
      album: "asd",
      name: "BEBE",
      url: "http://localhost/track.mp3",
      _id: 1
    }
  constructor(private multimediaServices: MultimediaService) { }

  ngOnInit(): void {
    const observer1$ = this.multimediaServices.callback.subscribe(
      // la respuesta tiene q ser un track de TracksModule
      (response: TracksModule) => {
        console.log("recibiendo cancion", response);

      }
    )
  }
}
