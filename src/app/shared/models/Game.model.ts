export class Game {
  public id: number;
  public name: string;
  public logo: string;
  public description: string;
  public nb_participants: number;

  constructor(id: number, name: string, logo: string, description: string, nb_participants: number) {
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.description = description;
    this.nb_participants = nb_participants;
  }
}
