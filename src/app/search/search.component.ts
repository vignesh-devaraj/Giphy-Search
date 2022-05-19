import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
  }

  search(searchForm): void {
    let searchInput = searchForm.value.searchInput;
    if(searchInput) {
      this.searchValue.emit(searchInput);
    }
  }

}
