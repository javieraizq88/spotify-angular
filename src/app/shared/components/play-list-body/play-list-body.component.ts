import { Component, OnInit } from '@angular/core';
import * as dataRaw from "../../../data/tracks.json"
import { TrackModel } from '@core/models/tracks.model';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgFor
  ],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.less'
})
export class PlayListBodyComponent  implements OnInit {
 tracks: TrackModel [] = []

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.tracks = data;
    console.log(data)
  }

}
