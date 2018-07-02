import {Routes} from '@angular/router';
import {NewsComponent} from '../navigation-menu/news/news.component';

export const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: '', redirectTo: '/news', pathMatch: 'full'}
];
