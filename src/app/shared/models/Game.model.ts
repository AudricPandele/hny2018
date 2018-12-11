export class Game {
  public id: number;
  public name: string;
  public logo: string;
  public description: string;

  constructor(id: number, name: string, logo: string, description: string) {
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.description = description;
  }
}
