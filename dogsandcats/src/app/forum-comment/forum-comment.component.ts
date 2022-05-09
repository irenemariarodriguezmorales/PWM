import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-forum-comment',
  templateUrl: './forum-comment.component.html',
  styleUrls: ['../../styles/Main_style.css']
})
export class ForumCommentComponent implements OnInit {

  constructor(private router: Router, private _databaseService: DatabaseService) { }

  ngOnInit(): void {
  }


  addComment() {
    let newId = this._databaseService.generateNewId();
    let text = (<HTMLInputElement>document.getElementById("commenText")).value;
    this._databaseService.addComment(newId,text);
    this.router.navigate(['Forum']);

  }
}
