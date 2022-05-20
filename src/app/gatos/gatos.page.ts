import { Component, OnInit } from '@angular/core';
import { Accounts } from '../interfaces/accounts';
import { Animals } from '../interfaces/animals';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.page.html',
  styleUrls: ['../../styles/estilos.css'],
})
export class GatosPage implements OnInit {

  animals:Animals[]=[];

 /* animals!:AnimalsInterface[];
  constructor(private gatosSvc: AnimalsServiceService) { }

  ngOnInit(): void {
    this.gatosSvc.get().pipe(
      tap((animals: AnimalsInterface[]) => this.animals = animals.filter(item=>item.type==="gato"))
    )
    .subscribe();
  }*/

  constructor(private _databaseService: DatabaseService) { }
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
        let aux = await this._databaseService.getAllAnimals();
        let j = 0;
        for(let i = 0; i <= aux.length; i++) {
          if(aux[i].type=="gato") {
            this.animals[j]=aux[i];
            j++;
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
}
