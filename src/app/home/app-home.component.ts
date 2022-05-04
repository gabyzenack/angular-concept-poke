import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
})
export class AppHomeComponent {
  @Input('nameFirst') first: string;
  
  //<string> type event
  @Output() changeChildren = new EventEmitter<string>();

  constructor() {
    this.first = 'mundo';
  }

  func(e: Event) {
    this.changeChildren.emit(this.first)
  }
}
