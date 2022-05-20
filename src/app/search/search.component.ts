import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ISearchInput } from '../interface/search.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() { }
  @Output() searchValue: EventEmitter<ISearchInput> = new EventEmitter<ISearchInput>();
  inputData: ISearchInput = {
    searchValue: "",
    limit: 50
  }
  search(): void {
    this.searchValue.emit(this.inputData);
  }

}
