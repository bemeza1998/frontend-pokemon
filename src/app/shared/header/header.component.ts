import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokemonService } from '../../pokemon/services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
    img {
      width: 150px;
    }
    `
  ]
})
export class HeaderComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private pokemonService: PokemonService) { }


  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.pokemonService.buscarPorTermino(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
