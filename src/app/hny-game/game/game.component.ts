import { Component, OnInit, Input, Output } from '@angular/core';
import { Game } from 'src/app/shared/models/Game.model';
import { User } from 'src/app/shared/models/User.model';
import { HnyService } from '../hny.service';
import { EventEmitter } from '@angular/core';

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
        console.log(resp);
      },
      error => {
        console.log(error);
      },
      () => {
        this.hideTimerChange.emit(false);
        console.log('ok');
      }
    );
  }
}
