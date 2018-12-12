import { Component, OnInit } from '@angular/core';
import { HnyService } from '../hny.service';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  users: User[];

  constructor(private hnyService: HnyService) { }

  ngOnInit() {
    this.hnyService.getusers().subscribe((resp) => this.users = resp);
  }

}
