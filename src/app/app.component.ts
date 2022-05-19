import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search';
  searchInput = "";
  url = "https://api.giphy.com/v1/gifs/search";
  api_key="EpIrOlOo0mgDbuQGXBJOh0jRQR2QNQvj";
  limit = 20;
  rating="g";
  lang="en";
  random_id="asdqweasd";
  constructor(private http: HttpClient) {}

  updateSearchValue(searchValue): void {
    this.searchInput = searchValue;
    console.log(this.searchInput);
    this.getData();
  }

  getData() {
    this.http.get(
      `${this.url}?q=${this.searchInput}&rating=${this.rating}&api_key=${this.api_key}`
      ).subscribe( data => console.log(data))
  }
}
