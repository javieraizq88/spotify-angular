import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TrackService } from '../../../modules/tracks/services/track.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    RouterLink
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.less'
})
export class SideBarComponent {

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] };

  customOptions: Array<any> = []

  constructor(private router: Router, private trackService: TrackService) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history'] // localhost:4200/history
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: "mundo" } //http://localhost:4200/favorites?hola=mundo
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
    
    // muestra la cancion random en el side bar a los 3 seg
    this.trackService.dataCancionesRandom$
      .subscribe((response: any) => {
        console.log("desde el side bar", response);

        this.customOptions.push({
          name: response[0].name,
          router: []
        })
      })
  }

  goTo($event: any): void {

  }
}
