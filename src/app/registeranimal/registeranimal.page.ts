import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Accounts } from '../interfaces/accounts';
import { Animals } from '../interfaces/animals';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-registeranimal',
  templateUrl: './registeranimal.page.html',
  styleUrls: ['../../styles/Main_style.css'],
})
export class RegisteranimalPage implements OnInit {

  id: string = "X";
  animal!:Animals;

  constructor(public router: Router, private _databaseService: DatabaseService, private activatedRoute: ActivatedRoute) { }
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

    if(this.activatedRoute.snapshot.params["animalid"] != null) {
      this.id = this.activatedRoute.snapshot.params["animalid"];
      this.getAnimal();
    }
  }

  addAnimal() {
    let newId = this._databaseService.generateNewId();
    let name = (<HTMLInputElement>document.getElementById("animalname")).value;
    let type = (<HTMLInputElement>document.getElementById("tipe")).value;
    let description = (<HTMLInputElement>document.getElementById("animaldescription")).value;
    let foto = (<HTMLInputElement>document.getElementById("foto")).value;
    this._databaseService.addAnimal(newId,name, type, description, foto);
    this.router.navigate(['perrosygatos']);

  }

  async updateAnimal(id?:string) {
    let name = (<HTMLInputElement>document.getElementById("animalname")).value;
    let description = (<HTMLInputElement>document.getElementById("animaldescription")).value;
    this._databaseService.updateAnimal(id,name,description);
  }

  async getAnimal() {
      let aux = await this._databaseService.getAllAnimals();
      for(let i = 0; i <= aux.length; i++) {
        if(aux[i].id==this.id) {
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

}
