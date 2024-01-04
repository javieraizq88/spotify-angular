import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,

  ],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.less'
})
export class MediaPlayerComponent {
  mockCover: any =
  {
    cover:"",
    album: "asd",
    name: "BEBE"
  }
}
