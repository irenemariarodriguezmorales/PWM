import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { NewsInterface } from '../interfaces/news-interface';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['../../styles/Main_style.css']
})
export class AllnewsComponent implements OnInit {

  news !: NewsInterface[];

  constructor( private newsSvc :NewsServiceService ) { }

  ngOnInit(): void {
    this.newsSvc.get().pipe(
      tap((news: NewsInterface[]) => this.news = news)
    )
    .subscribe();
  }

}
