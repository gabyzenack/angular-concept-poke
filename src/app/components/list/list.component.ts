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

  nextUrlPage: string = ""
  prevUrlPage: string = ""
  limitPage: number = 10;

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

  getPokemons(limitPage: number = this.limitPage, urlPage?: string): void {
    this.subscription = this.pokemonService.getNext(limitPage, urlPage).subscribe(response => {
      this.prevUrlPage = response.next;
      this.nextUrlPage = response.previous;
      response?.results.map(async(pokemon: any, index: number) => {
        this.pokemonService.pokemons.splice(index, 1, pokemon);
        await this.getDetail(pokemon.url, index);
      })
    }, error => console.log('Error Occurred:', error));
  }

  getDetail(url: string, index: number): void {
    this.subscription = this.pokemonService.getPokemonDetail(url).subscribe((response) => {
      this.pokemonService.pokemons.splice(index, 1, response);
    }, error => console.log('Error Occurred:', error));
  }

  getFirstType(pokemon: any) {
    if (!pokemon?.types) return;
    return pokemon?.types[0]?.type.name;
  }

  async onFilter(value: any) {
    this.filter = value;
    if (value === "") {
      this.pokemonsFiltered = null;
      this.pokemonService.pokemons = [];
      return this.getPokemons();
    }
    if (this.pokemonService?.pokemons?.length === 10) {
      await this.getPokemons(151, this.nextUrlPage,);
    }
    this.pokemonsFiltered = this.pokemons?.filter(pokemon => pokemon?.name?.toLowerCase().includes(value?.toLowerCase()));
  }

  //Output Events
  onSelect(value: any) {
    this.pokemonSelected = value;
  }
  onNextPage() {
    this.getPokemons(this.limitPage, this.nextUrlPage)
  }
  onPrevPage() {
    this.getPokemons(this.limitPage, this.prevUrlPage)
  }
}

