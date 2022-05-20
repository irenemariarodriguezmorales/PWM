import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animals } from '../interfaces/animals';
import { tap } from 'rxjs/operators';
import { Accounts } from '../interfaces/accounts';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-notificatedanimal',
  templateUrl: './notificatedanimal.page.html',
  styleUrls: ['../../styles/Main_style.css'],
})
export class NotificatedanimalPage implements OnInit {

  animal !: Animals;
  animalid !: string;
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

  constructor(private activatedRoute: ActivatedRoute,  private _databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.loggedaccount.id = sessionStorage.getItem("id");
    this.loggedaccount.email = sessionStorage.getItem("email");
    this.loggedaccount.name = sessionStorage.getItem("name");
    this.loggedaccount.type = sessionStorage.getItem("type");

    this.animalid = this.activatedRoute.snapshot.params['animalid'];
    this.getAnimal();    
  }

  async getAnimal() {
    let aux = await this._databaseService.getAllAnimals();
      for(let i = 0; i <= aux.length; i++) {
        if(aux[i].id === this.animalid) {
          this.animal=aux[i];            
        }
      }
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

  async getInterested(){
    return this.animal?.interested.join("\n");
  }
}

