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
  @Output() hideTimerChange = new EventEmitter<any>();
  @Input() game: Game;
  @Input() users: Array<User>;
  hideReward = true;
  hidePledge = true;
  hideGame = false;
  pledge: Pledge;
  reward: Reward;
  multiUsers = false;
  constructor(private hnyService: HnyService) {}

  ngOnInit() {
    this.users.length > 1 ? this.multiUsers = true : this.multiUsers = false;
    console.log(this.multiUsers);
  }

  win(user) {
    const toDelete: number = this.users.indexOf(user);
    if (toDelete !== -1) {
      this.users.splice(toDelete, 1);
    }

    // For winner
    const newUserWin = new User(
      user.id,
      user.name,
      (user.game_played += 1),
      (user.game_win += 1),
      user.game_loose,
      user.color,
      user.photo
    );

    this.hnyService.putUser(newUserWin).subscribe(
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

    // For loosers
    if (this.users.length > 0) {
      for (let index = 0; index < this.users.length; index++) {
        const newUserLoose = new User(
          this.users[index].id,
          this.users[index].name,
          (this.users[index].game_played += 1),
          this.users[index].game_win,
          (this.users[index].game_loose += 1),
          this.users[index].color,
          this.users[index].photo
        );
        this.hnyService.putUser(newUserLoose).subscribe(
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
    }
  }

  loose(user) {
    const newUser = new User(
      user.id,
      user.name,
      (user.game_played += 1),
      user.game_win,
      (user.game_loose += 1),
      user.color,
      user.photo
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

  skip() {
    this.hideTimerChange.emit({ event: false, time: 1 });
  }

  relaunchTimer() {
    this.hideTimerChange.emit({ event: false, time: 900 });
  }
}
