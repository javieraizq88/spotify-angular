import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';

const routes: Routes = [
  {
    path: "",
    component: TracksPageComponent,
    outlet: "child"
  }
];

@NgModule({
  imports: [
    RouterModule.
    forChild(routes),
    RouterOutlet,

  ],
  exports: [
    RouterModule,
    RouterOutlet,

  ]
})
export class TracksRoutingModule { }
