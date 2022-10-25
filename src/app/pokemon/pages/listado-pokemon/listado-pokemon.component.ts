import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html'
})
export class ListadoPokemonComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  listadoPokemon: Pokemon[] = [];
  noResultados: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.obtenerPokemons()
      .subscribe((pokemons: Pokemon[]) => {
        this.listadoPokemon = pokemons;
        console.log(this.listadoPokemon);
      })
  }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.pokemonService.buscarPorTermino(valor)
      .subscribe(pokemons => {
        this.listadoPokemon = pokemons;
        if (this.listadoPokemon.length == 0) {
          this.noResultados = true;
        } else {
          this.noResultados = false;
        }
      });
    this.txtBuscar.nativeElement.value = '';
  }
}



