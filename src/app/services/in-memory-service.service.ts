import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CookieRecette } from '../shared/models/CookieRecette.model';
import { Ingredient } from '../shared/models/Ingredient.model';
import { User } from '../shared/models/User.model';
import { Game } from '../shared/models/Game.model';

@Injectable()
export class InMemoryServiceService implements InMemoryDbService {
  createDb() {
    const ingredients = [
      new Ingredient(1, 'Chocolat', 2),
      new Ingredient(2, 'Farine', 2),
      new Ingredient(3, 'Lait', 2),
      new Ingredient(4, 'Oeuf', 2),
      new Ingredient(5, 'Fraise', 2),
      new Ingredient(6, 'Noisette', 2),
      new Ingredient(7, 'Amande', 2),
      new Ingredient(8, 'Vanille', 2),
      new Ingredient(9, 'Sucre', 2)
    ];

    const cookieRecettes = [
      new CookieRecette(
        1,
        'Recette cookie chocolat',
        '07/12/2018',
        10,
        'Ceci est la description de la recette des cookies au chocolat',
        [
          ingredients[0],
          ingredients[1],
          ingredients[2],
          ingredients[3],
          ingredients[10]
        ],
        4
      ),
      new CookieRecette(
        2,
        'Recette cookie fraise',
        '07/12/2018',
        12,
        'Ceci est la description de la recette des cookies a la fraise',
        [
          ingredients[4],
          ingredients[1],
          ingredients[2],
          ingredients[3],
          ingredients[10]
        ],
        3
      )
    ];

    const users = [
      new User(1, 'Audric', 0, 0, 0),
      new User(2, 'Barbara', 0, 0, 0),
      new User(3, 'Dimitri', 0, 0, 0),
      new User(4, 'Charlotte', 0, 0, 0)
    ];

    const games = [
      new Game(1, 'Dégustation', 'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg', ''),
      new Game(2, 'Touché', 'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg', ''),
      new Game(3, 'Mime', 'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg', ''),
      new Game(4, 'Question', 'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg', ''),
      new Game(3, 'Jeu mario party', 'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg', ''),
      new Game(4, 'Course mario kart', 'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg', '')
    ];

    return { cookieRecettes, ingredients, users, games };
  }
}
