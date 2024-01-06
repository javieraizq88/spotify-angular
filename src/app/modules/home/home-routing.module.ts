import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TracksModule } from '../tracks/tracks.module';

import { HistoryModule } from '../history/history.module';



const routes: Routes = [
{
  path: "tracks",
  loadChildren:() => import(`@modules/tracks/tracks.module`).then(m => m.TracksModule)
},
{
  path: "favorites",

},
{
  path: "history",
  loadChildren:() => import(`@modules/history/history.module`).then(m => m.HistoryModule)
}
];

@NgModule({
  imports: [
    RouterModule.
    forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
