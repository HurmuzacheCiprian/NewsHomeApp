import {NewsService} from '../../app.service';
import {Component} from '@angular/core';
import {EventService} from '../../events/event.service';

@Component({
  selector: 'app-news-component',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  articles = [];
  currentCountryName = 'United States';
  showLoading = true;

  constructor(private newsService: NewsService,
              private eventService: EventService) {

    this.newsService.getNews()
      .subscribe(data => {
        this.articles = data.articles;
        this.showLoading = false;
      });

    this.eventService.receive()
      .subscribe(country => {
        this.showLoading = true;
        this.currentCountryName = country.name;
        this.newsService.getNewsForCountryCode(country.code)
          .subscribe(data => {
            this.showLoading = false;
            this.articles = data.articles;
            console.log(this.articles);
            if (this.articles.length === 0) {  // the country code needs to be registered
              console.log('needs to be registered');
              this.currentCountryName = 'United States';
            }
          });
      });
  }
}
