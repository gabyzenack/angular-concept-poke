import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  subscriptions: Subscription[] = [];

  get pokemons(): any[] {
    return this.pokemonService.pokemons;
  }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    if (!this.pokemons?.length) this.testApi();
  }

  testApi(): void {
    this.subscription = this.pokemonService.getNext("10").subscribe(response => {
      console.log("🚀 ~ file: list.component.ts ~ line 32 ~ ListComponent ~ this.subscription=this.pokemonService.getNext ~ response", response)
    }, error => console.log('Error Occurred:', error));
  }
}
