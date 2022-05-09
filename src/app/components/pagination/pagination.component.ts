import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  subscriptions: Subscription[] = [];

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
  }

  prevPage(){

  }

  nextPage(){
    
  }

}
