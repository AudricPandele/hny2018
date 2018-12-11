import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieRecette } from '../shared/models/CookieRecette.model';
import { Observable } from 'rxjs';
import { Ingredient } from '../shared/models/Ingredient.model';

@Injectable()
export class CookieService {
  constructor(private httpClient: HttpClient) {}

  getRecettes(): Observable<CookieRecette[]> {
    return this.httpClient.get<CookieRecette[]>('api/cookieRecettes');
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>('api/ingredients');
  }

  getRecetteById(id: number): Observable<CookieRecette> {
    return this.httpClient.get<CookieRecette>('api/cookieRecettes/' + id);
  }

  addRecette(recette: CookieRecette): Observable<any> {
    return this.httpClient
      .post<CookieRecette>('api/cookieRecettes', recette);
  }
}
