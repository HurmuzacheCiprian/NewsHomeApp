import {Component} from '@angular/core';
import {NewsService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = [];

  constructor(private newsService: NewsService) {
    this.newsService.getNews()
      .subscribe(data => {
        this.articles = data.articles;
        console.log(this.articles);
      });
  }
}
