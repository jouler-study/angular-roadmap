import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from './../services/gifs.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent {
  // symbol "!" means that the element is required (is not null)
  // view child is a reference to the element in the template (ref)
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  search() {
    const value = this.txtSearch.nativeElement.value;
    if (!value || value.trim().length === 0) return;

    this.gifsService.searchGifs(value);
    this.txtSearch.nativeElement.value = '';
  }

  constructor(private gifsService: GifsService) {}
}
