import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsInterface } from '../interfaces/accounts-interface';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['../../styles/Main_style.css']
})
export class LoggingComponent implements OnInit {


  users:AccountsInterface[]=[];

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
          
          if(this.users[i].type=="admin" || this.users[i].type=="ong") {
            this.router.navigate(["Mainpage_admin"]);
          } else {
            this.router.navigate(["mainpagecerrarsesion"]);
          }
          
        }
    }



  }

}
