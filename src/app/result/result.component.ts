import { ISearchResponse } from './../interface/search.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  @Input("data") searchResult: ISearchResponse;

}
