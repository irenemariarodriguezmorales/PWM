import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../../styles/Main_style.css'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private _databaseService: DatabaseService) { }

  ngOnInit(): void {
  }

  registerCheck() {
    let name = (<HTMLInputElement>document.getElementById("registername")).value;
    let email = (<HTMLInputElement>document.getElementById("registermail")).value;
    let password = (<HTMLInputElement>document.getElementById("registerpassword")).value;
    let newId = this._databaseService.generateNewId();
    this._databaseService.addUser(newId, name,email,password);
    this.router.navigate(['MainPage']);

  }

}
