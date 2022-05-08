import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  @Input() types: any;

  constructor() { }

  ngOnInit(): void {
  }

}
