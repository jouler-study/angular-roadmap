import { Component } from '@angular/core';

import { GifsService } from './../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  _results: any[] = [];

  get results(): any {
    return this.gifsService.results;
  }

  constructor(private gifsService: GifsService) {}
}
