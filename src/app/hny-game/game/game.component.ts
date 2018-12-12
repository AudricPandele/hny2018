import { Component, OnInit, Input, Output } from '@angular/core';
import { Game } from 'src/app/shared/models/Game.model';
import { User } from 'src/app/shared/models/User.model';
import { HnyService } from '../hny.service';
import { EventEmitter } from '@angular/core';
import { Pledge } from 'src/app/shared/models/Pledge.model';
import { Reward } from 'src/app/shared/models/Reward.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() hideTimer: boolean;
  @Output() hideTimerChange = new EventEmitter<boolean>();
  @Input() game: Game;
  @Input() user: User;
  hideReward = true;
  hidePledge = true;
  hideGame = false;
  pledge: Pledge;
  reward: Reward;
  constructor(private hnyService: HnyService) {}

  ngOnInit() {}

  win() {
    const newUser = new User(
      this.user.id,
      this.user.name,
      (this.user.game_played += 1),
      (this.user.game_win += 1),
      this.user.game_loose,
      this.user.color,
      this.user.photo
    );

    this.hnyService.putUser(newUser).subscribe(
      resp => {
        this.hideReward = false;
      },
      error => {
        console.log(error);
      },
      () => {
        this.hnyService.getRewards().subscribe(resp => {
          this.reward = this.hnyService.getRandomElement(resp);
          this.hideGame = true;
          this.hideReward = false;
          this.hnyService.reloadScores.next(true);
        });
      }
    );
  }

  loose() {
    const newUser = new User(
      this.user.id,
      this.user.name,
      (this.user.game_played += 1),
      this.user.game_win,
      (this.user.game_loose += 1),
      this.user.color,
      this.user.photo
    );

    this.hnyService.putUser(newUser).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      },
      () => {
        this.hnyService.getPledges().subscribe(resp => {
          this.pledge = this.hnyService.getRandomElement(resp);
          this.hideGame = true;
          this.hidePledge = false;
          this.hnyService.reloadScores.next(true);
        });
      }
    );
  }

  relaunchTimer() {
    this.hideTimerChange.emit(false);
  }
}
