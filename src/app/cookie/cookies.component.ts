import { Component, OnInit } from '@angular/core';
import { CookieService } from './cookie.service';
import { CookieRecette } from '../shared/models/CookieRecette.model';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {
  recettes: CookieRecette[];
  constructor(private cookieServie: CookieService) {}

  ngOnInit() {
    this.cookieServie.getRecettes().subscribe(resp => (this.recettes = resp));
  }
}
