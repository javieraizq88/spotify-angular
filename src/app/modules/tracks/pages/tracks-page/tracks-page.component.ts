import { NgClass, NgFor } from '@angular/common';
import { Component, Directive, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { TrackService } from '../../services/track.service';
import { response } from 'express';
import { Subscription } from 'rxjs';
import { TracksModule } from '../../tracks.module';
import { timingSafeEqual } from 'crypto';


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

  cancionesTrending: Array<TracksModule> = []
  cancionesRandom: Array<TracksModule> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    // muestra un array estático con las canciones
    // const { data }: any = (dataRaw as any).default
    // this.mockTrackList = data;

    // const observer1$ = this.trackService.dataCancionesTrending$
    //   .subscribe(response => {
    //     this.cancionesTrending = response
    //     this.cancionesRandom = response
    //     console.log("canciones trending ", response);
    //   })

    // const observer2$ = this.trackService.dataCancionesRandom$
    //   .subscribe(response => {
    //     // concatena la cancion random al arreglo de canciones trending y lo muestra a los 4 seg en la seccion de abajo
    //     this.cancionesRandom = [...this.cancionesRandom, ...response]
    //     console.log("canciones random entrando ", response);
    //   })
    // this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
    // this.listObservers$.forEach(u => u.unsubscribe())

  }
}
