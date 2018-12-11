import { Component, OnInit } from '@angular/core';
import { HnyService } from '../hny.service';
import { Game } from 'src/app/shared/models/Game.model';

@Component({
  selector: 'app-hny-dashboard',
  templateUrl: './hny-dashboard.component.html',
  styleUrls: ['./hny-dashboard.component.css']
})
export class HnyDashboardComponent implements OnInit {
  hideTimer = false;
  timeLeft = 2;
  finalTime: string;
  interval;
  game: Game;

  constructor(private hnyService: HnyService) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        let minutes = Math.floor(this.timeLeft / 60);
        let seconds = this.timeLeft - minutes * 60;
        let hours = Math.floor(this.timeLeft / 3600);
        this.timeLeft = this.timeLeft - hours * 3600;
        this.finalTime = this.str_pad_left(minutes, '0', 2) + ':' + this.str_pad_left(seconds, '0', 2);
      } else {
        //this.timeLeft = 5;
        this.loadGame();
        clearInterval(this.interval);
      }
    }, 1000);
  }

  loadGame() {
    this.hideTimer = true;
    this.hnyService.getGames().subscribe(resp => {
      let games = resp;
      this.game = games[Math.floor(Math.random() * games.length)];
    });
  }

  str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
}

}
