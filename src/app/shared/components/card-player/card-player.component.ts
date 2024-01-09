import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';


@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
  ],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.less'
})

export class CardPlayerComponent implements OnInit {

  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = {
    _id: 0,
    name: "",
    album: "",
    url: "",
    cover: "",
  }

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void { }

  sendToPlay(track: TrackModel): void {
    console.log("enviando cancion al reproductor", track);

    this.multimediaService.callback.emit(track)
  }

}
