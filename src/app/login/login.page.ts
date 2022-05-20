import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts } from '../interfaces/accounts';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../../styles/Main_style.css'],
})
export class LoginPage implements OnInit {

  users:Accounts[]=[];

  constructor(private router: Router, private _databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {

    this.users = await this._databaseService.getAllUsers();
    
  }

  loginCheck() {
    let email = (<HTMLInputElement>document.getElementById("usermail")).value;
    let password = (<HTMLInputElement>document.getElementById("userpassword")).value;
    

    for(let i= 0; i < this.users.length; i++) {
        if(this.users[i].email == email && this.users[i].password == password) {

          sessionStorage.setItem("id", this.users[i].id);
          sessionStorage.setItem("email", this.users[i].email);
          sessionStorage.setItem("name", this.users[i].name);
          sessionStorage.setItem("type", this.users[i].type);
          
          this.router.navigate(["MainPage"])
          
        }
    }
  }
}
