import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts } from '../interfaces/accounts';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.page.html',
  styleUrls: ['../../styles/Main_style.css'],
})
export class AddcommentPage implements OnInit {

  constructor(public router: Router, private _databaseService: DatabaseService) { }
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
  }


  addComment() {
    let newId = this._databaseService.generateNewId();
    let text = (<HTMLInputElement>document.getElementById("commenText")).value;
    this._databaseService.addComment(newId,text);
    this.router.navigate(['Forum']);

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
