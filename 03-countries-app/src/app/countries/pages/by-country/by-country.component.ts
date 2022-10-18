import { Country } from './../../interfaces/country.interface';
import { Component } from '@angular/core';

import { CountryService } from './../../services/pais.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      ul {
        max-width: calc(100% - 25px);
        background-color: white;
        z-index: 1;
      }

      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  countries: Country[] = [];
  suggestions: Country[] = [];
  isSuggestionsActive: boolean = false;
  haveError: boolean = false;

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.isSuggestionsActive = false;
    this.haveError = false;
    this.term = term;

    this.countryService.searchCountry(term).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (err) => {
        this.haveError = true;
        this.countries = [];
      },
    });
  }

  getSuggestions(term: string) {
    this.isSuggestionsActive = true;
    this.term = term;
    this.haveError = false;

    this.countryService.searchCountry(term).subscribe({
      next: (countries) => (this.suggestions = countries.splice(0, 5)),
    });
  }
}
