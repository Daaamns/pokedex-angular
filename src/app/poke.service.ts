import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeApiLimit } from './models/poke.type';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { PokeResult } from './models/poke.result';
import { pokemonDetails } from './models/poke.details';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private readonly url: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  get3pokemon$(): Observable<PokeApiLimit> {
    return this.http.get<PokeApiLimit>(`${this.url}/pokemon?limit=20&offset=0`);
  }

  getPokemonDetails$(url: string): Observable<pokemonDetails> {
    return this.http.get<pokemonDetails>(url);
  }

  getPokemonDetailsForList$(): Observable<pokemonDetails[]> {
    return this.get3pokemon$().pipe(
      switchMap((pokemonDetails) => {
        const pokemonRequests: Observable<pokemonDetails>[] =
          pokemonDetails.results.map((pokemon) => {
            return this.getPokemonDetails$(pokemon.url);
          });
        return forkJoin(pokemonRequests);
      })
    );
  }
}
