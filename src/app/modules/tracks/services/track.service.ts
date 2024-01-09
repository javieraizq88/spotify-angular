import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { TracksModule } from '../tracks.module';
import * as dataRaw from "../../../data/tracks.json"

@Injectable({
  providedIn: 'root'
})

export class TrackService {

  dataCancionesTrending$: Observable<TracksModule[]> = of ([])
  dataCancionesRandom$: Observable<any> = of ([])

  constructor() {
    const { data }: any = (dataRaw as any).default;

    this.dataCancionesTrending$ = of(data)

    this.dataCancionesRandom$ = new Observable((observable) => {

      const trackExample: TracksModule = {
        _id: 9,
        name: "asdasdasd",
        album: "album",
        url: "http://",
        cover: "https://picsum.photos/200/300?grayscale"
      }


      setTimeout(() => {
        observable.next([trackExample])
      },3500)
    })

  }
}
