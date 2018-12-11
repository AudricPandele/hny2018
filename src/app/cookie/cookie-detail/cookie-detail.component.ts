import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';
import { ActivatedRoute } from '@angular/router';
import { CookieRecette } from 'src/app/shared/models/CookieRecette.model';

@Component({
  selector: 'app-cookie-detail',
  templateUrl: './cookie-detail.component.html',
  styleUrls: ['./cookie-detail.component.css']
})
export class CookieDetailComponent implements OnInit {
  id: number;
  recette: CookieRecette;
  constructor(private cookieService: CookieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.cookieService.getRecetteById(this.id).subscribe((resp) => {
      this.recette = resp;
    },
    (error) => {
      console.log(error);
    });
  }

}
