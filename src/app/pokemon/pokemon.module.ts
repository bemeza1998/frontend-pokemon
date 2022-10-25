import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPokemonComponent } from './pages/listado-pokemon/listado-pokemon.component';
import { VerPokemonComponent } from './pages/ver-pokemon/ver-pokemon.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListadoPokemonComponent,
    VerPokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PokemonModule { }
