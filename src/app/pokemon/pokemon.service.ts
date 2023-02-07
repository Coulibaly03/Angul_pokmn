import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperatorFunction } from 'rxjs';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  pipe(arg0: OperatorFunction<HttpResponse<PokemonService>, PokemonService>): import("rxjs").Observable<string | null> {
    throw new Error('Method not implemented.');
  }
  find(id: any) {
    throw new Error('Method not implemented.');
  }
  getPokemonList():  Pokemon[]{
    return POKEMONS;
  } 
  getPokemonByid(pokemonId:number): Pokemon|undefined {
    return POKEMONS.find(Pokemon => Pokemon.id == pokemonId);
  }
  getPokemonTypeList():string[]{
    return[
      'Plante',
      'Feu',
      'eau',
      'insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'vol',
      'Combat',
      'Psy',
       ]
  }
   

  constructor() {}
}
