import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CookieModule } from './cookie/cookie.module';
import { InMemoryServiceService } from './services/in-memory-service.service';
import { CookieService } from './cookie/cookie.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HnyGameModule } from './hny-game/hny-game.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CookieModule,
    HnyGameModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryServiceService)
  ],
  providers: [InMemoryServiceService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
