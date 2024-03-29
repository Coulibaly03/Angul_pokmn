import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: `./pokemon-form.component.html`,
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
LisTypesValid(_t49: String) {
throw new Error('Method not implemented.');
}
  @Input() pokemon:Pokemon;
  types: String[]
  constructor (private PokemonService:PokemonService,private router:Router){}
  ngOnInit() {
    this.types=this.PokemonService.getPokemonTypeList()

  }
  hasTypes(type:string):boolean{
   return this.pokemon.types.includes(type);
  }
  selectType($event:Event,type:string){
  const isChecked:boolean = ($event.target as HTMLInputElement).checked
  if(isChecked){
    this.pokemon.types.push(type);
  } else{
    const index = this.pokemon.types.indexOf(type);
    this.pokemon.types.splice(index, 1)
  }
  }
  isTypesValid(type:string):boolean{
    if(this.pokemon.types.length == 1 && this.hasTypes(type)) {
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasTypes(type)) {
      return false;
    }

    return true;
  }
  onSubmit(){
    console.log('Submit form:')
    this.router.navigate(['/pokemon',this.pokemon.id]);
  }

}
