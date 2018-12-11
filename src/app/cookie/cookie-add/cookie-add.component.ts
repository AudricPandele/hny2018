import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from '../cookie.service';
import { CookieRecette } from 'src/app/shared/models/CookieRecette.model';
import { Ingredient } from 'src/app/shared/models/Ingredient.model';

@Component({
  selector: 'app-cookie-add',
  templateUrl: './cookie-add.component.html',
  styleUrls: ['./cookie-add.component.css']
})
export class CookieAddComponent implements OnInit {
  recetteForm: FormGroup;
  ingredients: Ingredient[];
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.recetteForm = this.builder.group({
      title: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.cookieService.getIngredients().subscribe((resp) => this.ingredients = resp);
  }

  onSubmit(): void {
    if (this.recetteForm && this.recetteForm.valid) {
      const recette = new CookieRecette(
        10,
        this.recetteForm.get('title').value,
        this.recetteForm.get('date').value,
        this.recetteForm.get('price').value,
        this.recetteForm.get('description').value,
        this.recetteForm.get('ingredients').value,
        0
      );
      this.cookieService.addRecette(recette).subscribe((resp) => {
        this.router.navigate(['/cookies']);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('ok');
      }
      );
    }
  }
}
