import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() { }
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();

  search(searchForm: NgForm): void {
    const searchInput = searchForm.value.searchInput;
    if(searchInput) {
      this.searchValue.emit(searchInput);
    }
  }

}
