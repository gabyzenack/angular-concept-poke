import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() pokemon: any;
  @Output() pokemonEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getFirstType() {
    if (!this.pokemon?.types) return
    return this.pokemon?.types[0]?.type?.name
  }

  getHeightAndWeight(value: number) {
    if (!value) return
    let valueParse = value / 10 || 0;
    return valueParse
  }

  onClose() {
    this.pokemonEvent.emit(null)
  }
}
