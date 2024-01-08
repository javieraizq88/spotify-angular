import { NgClass, NgFor } from '@angular/common';
import { Component, Directive, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import * as dataRaw from "../../../../data/tracks.json";
import { TrackModel } from '@core/models/tracks.model';
import { ImgBrokenDirective } from '../../../../shared/directives/img-broken.directive';


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

  mockTrackList: Array<TrackModel> = []

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.mockTrackList = data;

  }
}
