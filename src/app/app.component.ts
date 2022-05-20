import { SearchResponse } from './interface/search.interface';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "search";
  searchInput = "";
  url = "https://api.giphy.com/v1/gifs/search";
  api_key = "EpIrOlOo0mgDbuQGXBJOh0jRQR2QNQvj";
  limit = 50;
  rating = "g";
  lang = "en";
  searchResponse: SearchResponse;
  isLoading: boolean;
  isInitialLoad = true;
  isError = false;
  constructor(private http: HttpClient) {}

  updateSearchValue(searchValue): void {
    this.searchInput = searchValue;
    this.isInitialLoad = false;
    this.isLoading = true;
    this.isError = false;
    this.searchResponse = null;
    this.getData();
  }

  getData() {
    this.http
      .get(
        `${this.url}?q=${this.searchInput}&rating=${this.rating}&api_key=${this.api_key}&limit=${this.limit}`
      )
      .subscribe(
        (data: SearchResponse) => {
          this.searchResponse = data;
          setTimeout(() => (this.isLoading = false), 0);
        },
        (error) => {
          this.isLoading = false;
          this.isError = true;
        }
      );
  }
}
