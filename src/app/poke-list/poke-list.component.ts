import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';
import { Observable, Subscription, skipUntil } from 'rxjs';
import { pokemonDetails } from '../models/poke.details';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
})
export class PokeListComponent {
  sub!: Subscription;
  pokemonDetails: Observable<pokemonDetails[]> =
    this.pokeApi.getPokemonDetailsForList$();

  constructor(private pokeApi: PokeService) {}

  ngOnInit() {
    const i = this.pokeApi.getPokemonDetailsForList$().subscribe(console.log);
  }
}
