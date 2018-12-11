import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../shared/models/Game.model';

@Injectable({
  providedIn: 'root'
})
export class HnyService {

  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>('api/games');
  }
}
