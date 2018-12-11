export class User {
  public id: number;
  public name: string;
  public game_played: number;
  public game_win: number;
  public game_loose: number;
  public color: string;
  public photo: string;

  constructor(id: number, name: string, game_played: number, game_win: number, game_loose: number, color: string, photo: string) {
    this.id = id;
    this.name = name;
    this.game_played = game_played;
    this.game_win = game_win;
    this.game_loose = game_loose;
    this.color = color;
    this.photo = photo;
  }
}
