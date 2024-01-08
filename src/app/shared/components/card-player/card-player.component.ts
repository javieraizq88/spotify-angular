import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';


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

export class CardPlayerComponent implements OnInit {

  @Input() mode: 'small' | 'big' = 'small'
  @Input() track!: TrackModel


  //TODO: remmplaza la img q esta rota porla img de elNative.src
  @HostListener("error") handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log("esta imagen", this.elHost);
    elNative.src = "https://picsum.photos/id/237/200/300"
  }
  constructor(private elHost: ElementRef) {

  }

  ngOnInit(): void {


  }

}
