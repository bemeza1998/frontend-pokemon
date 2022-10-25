import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styles: [
    `
      span {
        margin-right: 5px;
      }
    `
  ]
})
export class VerPokemonComponent implements OnInit {

  pokemon !: Pokemon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ nombre }) => this.pokemonService.buscarPorNombre(nombre))
      )
      .subscribe(pokemon => this.pokemon = pokemon);
  }

}
