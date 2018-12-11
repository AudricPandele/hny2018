import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CookieDetailComponent } from './cookie/cookie-detail/cookie-detail.component';
import { CookieAddComponent } from './cookie/cookie-add/cookie-add.component';
import { CookiesComponent } from './cookie/cookies.component';
import { HnyDashboardComponent } from './hny-game/hny-dashboard/hny-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: CookieDetailComponent },
  { path: 'add', component: CookieAddComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'hny', component: HnyDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
