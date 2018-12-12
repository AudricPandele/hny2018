import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HnyDashboardComponent } from './hny-dashboard/hny-dashboard.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [HnyDashboardComponent, GameComponent, ScoreComponent],
  imports: [
    CommonModule
  ]
})
export class HnyGameModule { }
