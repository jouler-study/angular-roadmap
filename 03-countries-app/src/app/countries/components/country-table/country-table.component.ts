import { Component, Input } from '@angular/core';

import { Country } from './../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
      table {
        position: relative;
        z-index: -1;
      }
    `,
  ],
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];

  constructor() {}
}
