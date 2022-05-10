import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {
  @Output() prevPageEvent = new EventEmitter<any>();
  @Output() nextPageEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  prevPage(){
    this.prevPageEvent.emit()
  }

  nextPage(){
    this.nextPageEvent.emit()
  }

}
