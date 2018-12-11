import { Ingredient } from './Ingredient.model';

export class CookieRecette {
  public id: number;
  public title: string;
  public date: string;
  public price: number;
  public descritpion: string;
  public ingredients: Ingredient[];
  public note: number;

  constructor(id: number, title: string, date: string, price: number, descritpion: string, ingredients: Ingredient[], note: number) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.price = price;
    this.descritpion = descritpion;
    this.ingredients = ingredients;
    this.note = note;
  }
}
