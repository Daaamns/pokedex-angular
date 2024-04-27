import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokePipe',
})
export class PokePipe implements PipeTransform {
  transform(pokemonType: string): string {
    switch (pokemonType) {
      case 'grass':
        return 'grass-type';
      case 'fire':
        return 'fire-type';
      case 'water':
        return 'water-type';
      case 'bug':
        return 'bug-type';
      case 'normal':
        return 'normal-type';
      // Ajoutez d'autres cas pour d'autres types de Pokémon
      default:
        return 'default-type';
    }
  }
}
