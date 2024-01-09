import { NgClass, NgFor } from '@angular/common';
import { Component, Directive, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import * as dataRaw from "../../../../data/tracks.json";
import { TrackModel } from '@core/models/tracks.model';

import { TrackService } from '../../services/track.service';
import { response } from 'express';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [
    SharedModule,
    RouterModule,
  ],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.less'
})
export class TracksPageComponent implements OnInit {

  cancionesTrending: Array<TrackModel> = []
  cancionesRandom: Array<TrackModel> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    // muestra un array estático con las canciones
    // const { data }: any = (dataRaw as any).default
    // this.mockTrackList = data;

    const observer1$ = this.trackService.dataCancionesTrending$
      .subscribe(response => {
      console.log("canciones trending ", response);

    })

  }
}
