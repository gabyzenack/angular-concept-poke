import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() stats: any[];

  constructor() {
    this.stats = [];
  }

  ngOnInit(): void {
  }

  getNumberStatInPorcent(stat: any) {
    let number = stat?.base_stat;
    return { width: `${number}px` }
  }
}
