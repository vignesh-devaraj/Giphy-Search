import { ISearchResponse } from './interface/search.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { SearchService } from './service/search.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  searchInput: string;
  limit: number = 5;
  rating: string = "g";
  lang: string = "en";
  searchResponse: ISearchResponse;
  isLoading: boolean;
  isInitialLoad: boolean = true;
  isError: boolean = false;

  constructor(private searchService: SearchService) {}

  updateSearchValue(searchValue): void {
    this.searchInput = searchValue;
    this.isInitialLoad = false;
    this.isLoading = true;
    this.isError = false;
    this.searchResponse = null;
    this.getData();
  }

  getData(): void {
    this.searchService.getData(this.searchInput, this.rating, this.limit)
      .subscribe(
        (data: ISearchResponse) => {
          this.searchResponse = data;
          setTimeout(() => (this.isLoading = false), 0);
        },
        (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.isError = true;
        }
      );
  }
}
