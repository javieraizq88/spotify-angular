import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TrackModel } from '@core/models/tracks.model';
import { OrderListPipe } from '../../pipes/sort.pipe';

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
export class CardPlayerComponent {
  @Input () mode: 'small' | 'big' = 'small'
  @Input () track!: TrackModel
}
