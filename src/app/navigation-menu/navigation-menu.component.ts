import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Country} from '../model/country';
import {CountryService} from '../country.service';
import {EventService} from '../events/event.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;
  countries: Country[] = [];
  searchText = '';

  constructor(private countryService: CountryService,
              private eventService: EventService,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 3200px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    const countries = this.countryService.getCountries();
    const countryCodes = Object.keys(countries);
    for (let i = 0; i < countryCodes.length; i++) {
      const country = new Country();
      country.name = countries[countryCodes[i]];
      country.code = countryCodes[i];
      this.countries.push(country);
    }

  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  loadNewsForCountry(country, snav) {
    snav.close();
    this.searchText = '';
    this.eventService.emit(country);
  }

}
