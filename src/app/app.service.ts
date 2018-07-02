import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from './model/article';

@Injectable()
export class NewsService {

  constructor(private httpClient: HttpClient) {
  }

  getNewsForCountryCode(countryCode): Observable<Article> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    const url = 'http://localhost:8080/headlines?country=' + countryCode.toLowerCase();
    console.log(url);
    return this.httpClient.get<Article>(url, {headers});
  }

  getNews(): Observable<Article> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    return this.httpClient.get<Article>('http://localhost:8080/headlines', {headers});
  }

}
