import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.less'
})
export class SideBarComponent {
  linksMenu: Array<any> = [
    {
      name: "home",
      icon: "uil-estate"
    },
    {
      name: "buscar",
      icon: "uil-estate"
    },
  ]
}
