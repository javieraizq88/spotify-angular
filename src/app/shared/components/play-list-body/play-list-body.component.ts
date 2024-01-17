import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataTRaw from "../../../data/tracks.json"
import { OrderListPipe } from '../../pipe/order-list.pipe';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-play-list-body',
    templateUrl: './play-list-body.component.html',
    styleUrls: ['./play-list-body.component.less'],
    standalone: true,
    imports: [NgFor, NgTemplateOutlet, ImgBrokenDirective, OrderListPipe]
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: TrackModel[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor() { }

  ngOnInit(): void {
    // TODO: trae la data desde el data.json
    // const { data }: any = (DataView as any).default
    // this.tracks = data

  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);

  }

}
