import { TrackService } from '@modules/tracks/services/track.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.less']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll() //TODO 📌📌
    this.loadDataRandom() //TODO 📌📌
  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    this.tracksRandom = await this.trackService.getAllTracks$().toPromise()
  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
   .subscribe((response: TrackModel[]) => {
          this.tracksRandom = response
       }, err => {
        //  alert("error de conexión")
        console.log("Error de conexión");
       })
  }

  ngOnDestroy(): void {

  }

}
