import { Component, OnInit } from '@angular/core';
import { Accounts } from '../interfaces/accounts';
import { Comments } from '../interfaces/comments';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['../../styles/Main_style.css'],
})
export class ForumPage implements OnInit {

  comments!: Comments[];
  accounts!: Accounts[];

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
  loggedaccount:Accounts = {
    id: '',
    email: '',
    name: '',
    surname: '',
    password: '',
    type: '',
    location: '',
    contact: ''
  };
  ngOnInit(): void {
    this.loggedaccount.id = sessionStorage.getItem("id");
    this.loggedaccount.email = sessionStorage.getItem("email");
    this.loggedaccount.name = sessionStorage.getItem("name");
    this.loggedaccount.type = sessionStorage.getItem("type");
    this.getComments();
  }

  async getComments() {

    this.comments = await this._databaseService.getAllComments();

  }

  deleteComment(id:string) {
    this._databaseService.deleteComment(id);
    
  }
  getCurrentUser():Accounts{
    if (this.loggedaccount.id != "" && this.loggedaccount.id != null){
      return this.loggedaccount;
    }
    return null;
  }

  logOut(){
    sessionStorage.setItem("id", "");
    sessionStorage.setItem("email", "");
    sessionStorage.setItem("name", "");
    sessionStorage.setItem("type", "");
  }
}
