import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interface';

const GIF_API_HEY = 'xBsEZ9YhrAEgitI0PBfICJ4VYpwS8yPI';
const GIF_API_URL = 'https://api.giphy.com/v1/gifs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  results: Gif[] = [];

  // personalize get for history attribute
  get history() {
    return [...this._history];
  }

  // inject HttpClient
  constructor(private http: HttpClient) {
    // ! operator is used to tell TypeScript that we are sure that the value is not null or undefined
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('latestResults')!) || [];
  }

  searchGifs(query: string) {
    this.addToHistory(query);

    const params = new HttpParams()
      .set('api_key', GIF_API_HEY)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGIFResponse>(`${GIF_API_URL}/search`, { params })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('latestResults', JSON.stringify(resp.data));
      });
  }

  addToHistory(keyword: string) {
    keyword = keyword.trim().toLowerCase();

    if (!this._history.includes(keyword)) {
      this._history.unshift(keyword);
      this._history = this._history.splice(0, 10);
      localStorage.setItem('history', JSON.stringify(this._history));
    }
  }
}
