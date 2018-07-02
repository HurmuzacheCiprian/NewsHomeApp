import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationMenuComponent} from './navigation-menu.component';
import {RouterModule} from '@angular/router';
import {routes} from '../routes/routes';
import {HttpClientModule} from '@angular/common/http';
import {NewsService} from '../app.service';
import {FormsModule} from '@angular/forms';
import {CountryService} from '../country.service';
import {NewsComponent} from './news/news.component';
import {FilterPipe} from '../filter/filter';
import {EventService} from '../events/event.service';

@NgModule({
  declarations: [NavigationMenuComponent, NewsComponent, FilterPipe],
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NewsService, CountryService, EventService],
  exports: [NavigationMenuComponent]
})
export class NavigationMenuModule {
}
