import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TracksModule } from '@modules/tracks/tracks.module';
import { CardPlayerComponent } from '../card-player/card-player.component';


@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    CardPlayerComponent,
  ],
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.less'
})
export class SectionGenericComponent {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<any> = []
}
