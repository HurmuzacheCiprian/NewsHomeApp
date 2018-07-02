import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {NewsService} from './app.service';
import {CountryService} from './country.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {Country} from './model/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
