import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AccountsInterface } from '../interfaces/accounts-interface';
import { CommentsInterface } from '../interfaces/comments-interface';
import { AccountsServiceService } from '../services/accounts-service.service';
import { CommentsServiceService } from '../services/comments-service.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['../../styles/Main_style.css']
})
export class ForumComponent implements OnInit {

  comments!: CommentsInterface[];
  accounts!: AccountsInterface[];

  //constructor( private forumSvc: CommentsServiceService, private userSvc: AccountsServiceService ) {  }

  /*ngOnInit(): void {
    this.forumSvc.get().pipe(
      tap((comments: CommentsInterface[]) => this.comments = comments))
      .subscribe();
    
    this.userSvc.get().pipe(
      tap((users: AccountsInterface[]) => this.accounts = users))
      .subscribe();
  }*/

  /*getName(userID: string){
    return this.accounts.filter(item => item.id === userID)[0].name;
  }*/

  constructor( private _databaseService: DatabaseService) {  }

  ngOnInit(): void {
    this.getComments();
  }

  async getComments() {

    this.comments = await this._databaseService.getAllComments();

  }

  deleteComment(id:string) {
    this._databaseService.deleteComment(id);
    
  }
  
}