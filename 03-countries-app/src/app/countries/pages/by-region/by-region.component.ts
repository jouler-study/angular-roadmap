import { Country } from './../../interfaces/country.interface';
import { CountryService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  activeRegion: string = '';
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getCssClass(region: string): string {
    return this.activeRegion === region
      ? 'btn btn-primary me-2'
      : 'btn btn-outline-primary me-2';
  }

  activateRegion(region: string) {
    if (this.activeRegion === region) return;

    this.activeRegion = region;

    this.countryService.searchByRegion(region.toLowerCase()).subscribe({
      next: (countries) => (this.countries = countries),
    });
  }
}
