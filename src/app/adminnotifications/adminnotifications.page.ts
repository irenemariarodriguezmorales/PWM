import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts } from '../interfaces/accounts';
import { Animals } from '../interfaces/animals';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-adminnotifications',
  templateUrl: './adminnotifications.page.html',
  styleUrls: ['../../styles/Main_style.css'],
})
export class AdminnotificationsPage implements OnInit {

  animals!:Animals[];

  //constructor(private perrosSvc: AnimalsServiceService) { }

  /*ngOnInit(): void {
    this.perrosSvc.get().pipe(
      tap((animals: AnimalsInterface[]) => this.animals = animals)
    )
    .subscribe();
  }*/

  constructor(private _databaseService: DatabaseService, public router: Router) { }
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

    this.getAnimals();
    
  }

  async getAnimals() {
    this.animals = await this._databaseService.getAllAnimals();
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
