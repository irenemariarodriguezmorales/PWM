import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsInterface } from '../interfaces/news-interface';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  private apiURL = "http://localhost:3000/noticias";
  constructor(private http: HttpClient) { }

  get():Observable<NewsInterface[]>{
    return this.http.get<NewsInterface[]>(this.apiURL);
  }
}
