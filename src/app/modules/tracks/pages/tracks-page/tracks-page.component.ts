import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    SharedModule,
    RouterModule,
  ],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.less'
})
export class TracksPageComponent {
mockTrackList = [
  {
    name: "bebe"
  },
  {
    name: "bebe"
  },
  {
    name: "bebe"
  },
]
}
