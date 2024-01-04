import { HomeModule } from './home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TracksModule } from '../tracks/tracks.module';
import { FavoritesPageModule } from '../favorites/favorites-page.module';
import { HistoryModule } from '../history/history.module';
import { SharedModule } from '@shared/shared.module';


const routes: Routes = [
{
  path: "tracks",
  loadChildren:() => import(`@modules/tracks/tracks.module`).then(m => m.TracksModule)
},
{
  path: "favorites",
  loadChildren:() => import(`@modules/favorites/favorites-page.module`).then(m => m.FavoritesPageModule)
},
{
  path: "history",
  loadChildren:() => import(`@modules/history/history.module`).then(m => m.HistoryModule)
}
];

@NgModule({
  imports: [RouterModule. forChild(routes), SharedModule, TracksModule, FavoritesPageModule, HistoryModule],
  exports: [RouterModule, TracksModule, FavoritesPageModule, HistoryModule]
})
export class HomeRoutingModule { }
