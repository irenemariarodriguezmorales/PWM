import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AccountsInterface } from '../interfaces/accounts-interface';
import { CommentsInterface } from '../interfaces/comments-interface';
import { NewsInterface } from '../interfaces/news-interface';
import { AccountsServiceService } from '../services/accounts-service.service';
import { CommentsServiceService } from '../services/comments-service.service';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['../../styles/Main_style.css']
})
export class MainpageComponent implements OnInit {

  news !: NewsInterface[];
  latest_news !: NewsInterface[];
  last_comment !: CommentsInterface;
  accounts !: AccountsInterface[];

  constructor( private newsSvc :NewsServiceService, private commentsSvc :CommentsServiceService, 
    private userSvc : AccountsServiceService) { }

  ngOnInit(): void {
    this.newsSvc.get().pipe(
      tap((news: NewsInterface[]) => this.news = news)
    )
    .subscribe();

    this.commentsSvc.get().pipe(
      tap((comments: CommentsInterface[]) => this.last_comment = comments[comments.length-1])
    )
    .subscribe();

    this.userSvc.get().pipe(
      tap((users: AccountsInterface[]) => this.accounts = users))
      .subscribe();
    
  }

  refresh(){
    if (this.news.length > 1){
      this.latest_news = this.news.slice(this.news.length-2);
    }

    else if (this.news.length == 1){
      this.latest_news = [];
      this.latest_news[0] = this.news[0];
    }

    else{
      this.latest_news = [];
    }
  }

  getName(userID: string){
    return this.accounts.filter(item => item.id === userID)[0].name;
  }


}
