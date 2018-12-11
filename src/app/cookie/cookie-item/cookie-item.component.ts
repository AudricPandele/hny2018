import { Component, OnInit, Input } from '@angular/core';
import { CookieRecette } from 'src/app/shared/models/CookieRecette.model';

@Component({
  selector: 'app-cookie-item',
  templateUrl: './cookie-item.component.html',
  styleUrls: ['./cookie-item.component.css']
})
export class CookieItemComponent implements OnInit {
  @Input() recette: CookieRecette;
  constructor() {}

  ngOnInit() {}
}
