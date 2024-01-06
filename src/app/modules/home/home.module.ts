import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TracksModule } from '@modules/tracks/tracks.module';
import { FavoritesModule } from '@modules/favorites/favorites.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomePageComponent,


  ]
})
export class HomeModule { }
