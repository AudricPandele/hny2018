import { Component, OnInit } from '@angular/core';
import { HnyService } from '../hny.service';
import { Game } from 'src/app/shared/models/Game.model';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-hny-dashboard',
  templateUrl: './hny-dashboard.component.html',
  styleUrls: ['./hny-dashboard.component.css']
})
export class HnyDashboardComponent implements OnInit {
  hideTimer = false;
  timeLeft = 900;
  finalTime: string;
  interval;
  game: Game;
  user: User;

  constructor(private hnyService: HnyService) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft - minutes * 60;
        const hours = Math.floor(this.timeLeft / 3600);
        this.timeLeft = this.timeLeft - hours * 3600;
        this.finalTime = this.str_pad_left(minutes, '0', 2) + ':' + this.str_pad_left(seconds, '0', 2);
      } else {
        this.loadGameAndUser();
        clearInterval(this.interval);
      }
    }, 1000);
  }

  loadGameAndUser() {
    this.hnyService.getGames().subscribe(resp => {
      const games = resp;
      this.game = this.hnyService.getRandomElement(games);
      this.hnyService.getusers().subscribe(respuser => {
        const users = respuser;
        this.user = this.hnyService.getRandomElement(users);
        this.hideTimer = true;
      });
    });
  }

  gameFinished(hide) {
    this.timeLeft = 900;
    this.hideTimer = hide;
    this.ngOnInit();
  }

  str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

}
