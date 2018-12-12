import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../shared/models/Game.model';
import { User } from '../shared/models/User.model';
import { Reward } from '../shared/models/Reward.model';
import { Pledge } from '../shared/models/Pledge.model';

@Injectable({
  providedIn: 'root'
})
export class HnyService {

  constructor(private httpClient: HttpClient) { }

  getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>('api/games');
  }

  getusers(): Observable<User[]> {
    return this.httpClient.get<User[]>('api/users');
  }

  getRewards(): Observable<Reward[]> {
    return this.httpClient.get<Reward[]>('api/rewards');
  }

  getPledges(): Observable<Pledge[]> {
    return this.httpClient.get<Pledge[]>('api/pledges');
  }

  putUser(user): Observable<User> {
    return this.httpClient.put<User>('api/users/' + user.id, user);
  }
}
