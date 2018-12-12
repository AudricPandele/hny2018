import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CookieRecette } from '../shared/models/CookieRecette.model';
import { Ingredient } from '../shared/models/Ingredient.model';
import { User } from '../shared/models/User.model';
import { Game } from '../shared/models/Game.model';
import { Reward } from '../shared/models/Reward.model';
import { Pledge } from '../shared/models/Pledge.model';

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
      new User(
        1,
        'Audric',
        0,
        0,
        0,
        'success',
        // tslint:disable-next-line:max-line-length
        'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/22282090_10212765293321514_1772789672244739484_n.jpg?_nc_cat=110&_nc_ht=scontent-cdg2-1.xx&oh=b1ebd1927fc0e6a2d4bd3c0089b57a13&oe=5CA4DAFD'
      ),
      new User(
        2,
        'Barbara',
        0,
        0,
        0,
        'primary',
        // tslint:disable-next-line:max-line-length
        'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/21616184_10212697078773941_3230088781841121742_n.jpg?_nc_cat=105&_nc_ht=scontent-cdg2-1.xx&oh=54c099249a518999212d0a4918781995&oe=5CAEDF26'
      ),
      new User(
        3,
        'Dimitri',
        0,
        0,
        0,
        'danger',
        // tslint:disable-next-line:max-line-length
        'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/16508969_10211918628021453_4099608215935869016_n.jpg?_nc_cat=104&_nc_ht=scontent-cdg2-1.xx&oh=3a9ab02bd0bcf858813c493019e18fae&oe=5C9B991B'
      ),
      new User(
        4,
        'Charlotte',
        0,
        0,
        0,
        'warning',
        // tslint:disable-next-line:max-line-length
        'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/27858049_1446750265435468_4813508910377459007_n.jpg?_nc_cat=105&_nc_ht=scontent-cdg2-1.xx&oh=97520a63b131afc3ec7f83022adbf2db&oe=5CB198BF'
      )
    ];

    const games = [
      new Game(
        1,
        'Dégustation',
        'http://www.le-roitelet.com/media/cache/photo_medium/uploads/img/activity/iStock_000033522418Small.jpg',
        'Manger un des aliments a l\'aveugle.'
      ),
      new Game(
        2,
        'Touché',
        // tslint:disable-next-line:max-line-length
        'https://media.ouest-france.fr/v1/pictures/3d52c4f710df958f37e03ceb805ad42b-gilbert-montagne-raconte-comment-il-perdu-la-vue-la-naissance.jpg?width=1260&height=712&fill=0&focuspoint=50%2C25&cropresize=1',
        'Mettre la main dans un des pots.'
      ),
      new Game(
        3,
        'Mime',
        'https://image.freepik.com/free-photo/mime-shows-at-something-invisible-on-his-palm_1304-2808.jpg',
        'Mimer une activité en moins de 30 secondes.'
      ),
      new Game(
        4,
        'Question',
        'http://quipoquiz.com/fb-quipoquiz-1200x630.png',
        'répondre a une question sur QuipoQuiz.'
      ),
      new Game(
        3,
        'Jeu mario party',
        'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SuperMarioParty.jpg',
        'Gagner un mini-jeu Mario Party au hasard.'
      ),
      new Game(
        4,
        'Course mario kart',
        'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg',
        'Gagner une course Mario Kart au hasard en 100 CC.'
      )
    ];

    const rewards = [
      new Reward(1, 'Skip', 'Tu as le droit de ne pas faire le prochain gage.'),
      new Reward(2, 'Le distributeur', 'Distribue 5 gorgés.'),
      new Reward(3, 'Jukebox', 'C\'est toi qui choisi la prochaine musique')
    ];

    const pledges = [
      new Pledge(1, 'Il est des notres', 'Allé cul-sec !'),
      new Pledge(2, 'Et de 1', 'Bois 1 gorgée !'),
      new Pledge(3, 'Et de 2', 'Bois 2 gorgées !'),
      new Pledge(4, 'Et de 3', 'Bois 3 gorgées !'),
      new Pledge(5, 'Et de 4', 'Bois 4 gorgées !'),
      new Pledge(6, 'Et de 5', 'Bois 5 gorgées !'),
      new Pledge(7, 'Switch', 'Change ton verre avec ton voisin de droite.'),
      new Pledge(
        8,
        'Soumis',
        'Tu dois dire "Maître" ou "Maîtresse" a chaque fois que tu adresse la parole a ton voisin de gauche jusqu\'au prochain jeu.'
      ),
      new Pledge(
        9,
        'Aveugle',
        'Jusqu\'au prochain jeu tu dois avoir les yeux bandés'
      ),
      new Pledge(10, 'Musclor', 'Fais 5 pompes.')
    ];

    return { cookieRecettes, ingredients, users, games, rewards, pledges };
  }
}
