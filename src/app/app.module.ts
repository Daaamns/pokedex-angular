import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokePipe } from './shared/poke.pipe';
import { PokeDirectivec } from './shared/poke.directive';

@NgModule({
  declarations: [AppComponent, PokeListComponent, PokePipe, PokeDirectivec],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
