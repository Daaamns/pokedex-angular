import { PokeResult } from './poke.result';

export type PokeApiLimit = {
  count: number;
  next: string | null;
  previous: string;
  results: PokeResult[];
};
