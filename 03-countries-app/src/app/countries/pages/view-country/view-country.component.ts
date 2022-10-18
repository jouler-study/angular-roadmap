import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';

import { Country, Languages } from './../../interfaces/country.interface';

import { CountryService } from './../../services/pais.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [],
})
export class ViewCountryComponent implements OnInit {
  countryInfo!: Country;

  get languages(): Languages[] {
    return Object.values(this.countryInfo.languages);
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ countryCode }) =>
          this.countryService.searchCountryByCode(countryCode)
        ),
        tap(console.log)
      )
      .subscribe({
        next: (resp) => (this.countryInfo = resp[0]),
        error: (err) => this.router.navigateByUrl(''),
      });
  }
}
