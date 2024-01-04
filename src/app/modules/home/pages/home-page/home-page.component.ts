import { Component } from '@angular/core';
import { HomeModule } from '@modules/home/home.module';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.less'
})
export class HomePageComponent {

}