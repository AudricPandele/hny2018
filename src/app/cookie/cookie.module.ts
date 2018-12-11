import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesComponent } from './cookies.component';
import { CookieItemComponent } from './cookie-item/cookie-item.component';
import { CookieDetailComponent } from './cookie-detail/cookie-detail.component';
import { CookieAddComponent } from './cookie-add/cookie-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CookiesComponent, CookieItemComponent, CookieDetailComponent, CookieAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CookiesComponent
  ]
})
export class CookieModule { }
