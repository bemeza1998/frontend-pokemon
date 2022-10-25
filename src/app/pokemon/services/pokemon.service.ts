import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pokemon } from '../interfaces/pokemon.interface';

const URL = environment.pokemonUrl;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) { }

  obtenerPokemons(): Observable<Pokemon[]> {
    const url_pokemon: string = `${URL}/pokemon`;
    return this.http.get<Pokemon[]>(url_pokemon);
  }

  buscarPorNombre(nombre: string): Observable<Pokemon> {
    const url_pokemon: string = `${URL}/pokemon/${nombre}`;
    return this.http.get<Pokemon>(url_pokemon);
  }

  buscarPorTermino(termino: string): Observable<Pokemon[]> {
    const url_pokemon: string = `${URL}/pokemon/termino/${termino}`;
    return this.http.get<Pokemon[]>(url_pokemon);
  }
}
