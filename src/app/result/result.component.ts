import { SearchResponse } from './../interface/search.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input("data") data: SearchResponse;
  constructor() { }

  ngOnInit() {

  }

}
