import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailListPokemonComponent } from './detail-list-pokemon/detail-list-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';


const POKMNroutes: Routes = [
  {path:'edit/pokemon/:id', component:EditPokemonComponent,},
  {path:'pokemons', component:ListPokemonComponent,},
  {path:'pokemons/:id', component:DetailListPokemonComponent,},
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailListPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(POKMNroutes)
  ],
  providers:[PokemonService]
})
export class PokemonModule { }
