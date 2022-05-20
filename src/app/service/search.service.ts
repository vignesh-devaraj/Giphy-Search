import { ISearchResponse } from './../interface/search.interface';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const API_KEY = "EpIrOlOo0mgDbuQGXBJOh0jRQR2QNQvj";
const URL = "https://api.giphy.com/v1/gifs/search";

@Injectable({ providedIn: "root" })
export class SearchService {
  constructor(private http: HttpClient) {}

  getData(searchInput: string, rating: string, limit: number): Observable<any> {
    return this.http.get(
      `${URL}?q=${searchInput}&rating=${rating}&api_key=${API_KEY}&limit=${limit}`
    );
  }
}
