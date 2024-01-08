
import { Component, Directive, Injectable, NgModule, Pipe } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgForOf } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from '@shared/shared.module';
import { TracksModule } from '@modules/tracks/tracks.module';
import { HistoryModule } from '@modules/history/history.module';
import { AuthModule } from '@modules/auth/auth.module';
import { CardPlayerComponent } from '@shared/components/card-player/card-player.component';
import { AppComponent } from './app.component';

@Directive({
  selector: '[appImgBroken]',
  standalone: true
})

@NgModule({
  declarations:   [   Directive   ],
  imports: [
        RouterModule,
    AppComponent,
    Injectable,


  ],
  exports: [
    RouterModule,
    AppComponent,

  ],
  providers:    [  ],
})
export class AppModule { }
