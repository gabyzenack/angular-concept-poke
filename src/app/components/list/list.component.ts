import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  filter: string = "";
  pokemonsFiltered: any = null;
  pokemonSelected: any = null;

  constructor(private pokemonService: PokemonService) { }

  subscriptions: Subscription[] = [];

  get pokemons(): any[] {
    return this.pokemonService.pokemons;
  }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    if (!this.pokemons?.length) this.getPokemons();
  }

  getPokemons(): void {
    this.subscription = this.pokemonService.getNext().subscribe(response => {
      response?.results.map((pokemon: any, index: number) => {
        this.pokemonService.pokemons.push(pokemon);
        this.getDetail(pokemon.url, index);
      })
    }, error => console.log('Error Occurred:', error));
  }

  getDetail(url: string, index: number): void {
    this.subscription = this.pokemonService.getPokemonDetail(url).subscribe((response) => {
      this.pokemonService.pokemons.splice(index, 1, response);
    }, error => console.log('Error Occurred:', error));
  }

  getFirstType(pokemon: any) {
    if (!pokemon?.types) return
    return pokemon?.types[0]?.type.name
  }

  onFilter(value: any) {
    this.filter = value;
    this.pokemonsFiltered = this.pokemons.filter(pokemon => pokemon?.name?.toLowerCase().includes(value.toLowerCase()))
  }

  onSelect(value: any) {
    this.pokemonSelected = value;
  }
}

