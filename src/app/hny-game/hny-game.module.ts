import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HnyDashboardComponent } from './hny-dashboard/hny-dashboard.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [HnyDashboardComponent, GameComponent],
  imports: [
    CommonModule
  ]
})
export class HnyGameModule { }
