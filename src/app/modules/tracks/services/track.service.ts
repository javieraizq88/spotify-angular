import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TracksModule } from '../tracks.module';
import * as dataRaw from "../../../data/tracks.json"

@Injectable({
  providedIn: 'root'
})

export class TrackService {

  dataCancionesTrending$: Observable<TracksModule[]> = of ([])

  constructor() {
    const { data }: any = (dataRaw as any).default;

    this.dataCancionesTrending$ = of(data)
  }
}
