import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { CountryTableComponent } from './components/country-table/country-table.component';
import { InputCountryComponent } from './components/input-country/input-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ViewCountryComponent,
    InputCountryComponent,
    CountryTableComponent,
    InputCountryComponent,
    CountryTableComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ViewCountryComponent,
  ],
})
export class CountriesModule {}
