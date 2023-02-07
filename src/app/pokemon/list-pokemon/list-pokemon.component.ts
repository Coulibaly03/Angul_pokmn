import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: `./list-pokemon.component.html`,
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit  {
  pokemonEn: Pokemon[] = POKEMONS;
  PokemonList: Pokemon[];
  constructor(
    private router: Router,
    private PokemonService: PokemonService

  ){}
  ngOnInit(){
    this.PokemonList= this.PokemonService.getPokemonList();
  }
  goToPokemon(pokemon=Pokemon){
    this.router.navigate(['/pokemon',Pokemon]);
  }
}
