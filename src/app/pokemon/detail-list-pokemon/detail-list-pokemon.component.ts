import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-list-pokemon',
  templateUrl: `./detail-list-pokemon.component.html`,
  styles: [
  ]
})
export class DetailListPokemonComponent implements OnInit {
  //pokemonEn: Pokemon[];
  pokemon:Pokemon|undefined
 constructor(private route:ActivatedRoute,
  private router:Router,
  private pokemonService: PokemonService
  ){

 }
 ngOnInit(): void {
    //this.pokemonEn = POKEMONS;
    const pokemonId: string| null = this.route.snapshot.paramMap.get('id') ;
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonByid(+pokemonId);
    }
 }
 goTopokemonList(){
     this.router.navigate(['../pokemon']);
 }
 goToEditPokemon(pokemon:Pokemon){
  this.router.navigate(['/edit/pokemon',pokemon.id]);
 }
}
