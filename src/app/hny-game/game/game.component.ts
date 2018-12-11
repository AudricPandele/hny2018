import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/shared/models/Game.model';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game: Game;
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}