import { Component } from '@angular/core';
import {Country} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-by-currency-page',
  templateUrl: './by-currency-page.component.html',
})
export class ByCurrencyPageComponent {
  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByCurrency( currency: string ) {
    this.countriesService.searchCurrency( currency )
      .subscribe( countries => this.countries = countries);
    console.log(this.countries);
  }
}
