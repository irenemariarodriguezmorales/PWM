import { Component, OnInit } from '@angular/core';
import { Accounts } from '../interfaces/accounts';
import { Animals } from '../interfaces/animals';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.page.html',
  styleUrls: ['../../styles/estilos.css'],
})
export class PerrosPage implements OnInit {

  animals:Animals[]=[];

 /* constructor(private perrosSvc: AnimalsServiceService) { }

  ngOnInit(): void {
    this.perrosSvc.get().pipe(
      tap((animals: AnimalsInterface[]) => this.animals = animals.filter(item => item.type === "perro"))
    )
    .subscribe();
  }*/
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
  constructor(private _databaseService: DatabaseService) { }


  ngOnInit(): void {
    this.loggedaccount.id = sessionStorage.getItem("id");
    this.loggedaccount.email = sessionStorage.getItem("email");
    this.loggedaccount.name = sessionStorage.getItem("name");
    this.loggedaccount.type = sessionStorage.getItem("type");

    this.getAnimals();
    
  }

  async getAnimals() {
        let aux = await this._databaseService.getAllAnimals();
        let j = 0;
        for(let i = 0; i <= aux.length; i++) {
          if(aux[i].type=="perro") {
            this.animals[j]=aux[i];
            j++;
          }
        }
  }
    //this.animals = await this._databaseService.getPerro();
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
