import { PlayScreenRoutes } from './play-screen.routes';
import { PlayScreenContainerComponent } from './containers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PlayScreenContainerComponent
  ],
  imports: [
    CommonModule,
    PlayScreenRoutes
  ]
  })

export class PlayScreenModule { }