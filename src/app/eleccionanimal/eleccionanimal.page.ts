import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accounts } from '../interfaces/accounts';
import { Animals } from '../interfaces/animals';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-eleccionanimal',
  templateUrl: './eleccionanimal.page.html',
  styleUrls: ['../../styles/estilos.css'],
})
export class EleccionanimalPage implements OnInit {


/*  animal!: AnimalsInterface;
  animalid!: string;
  constructor(private animalSvc: AnimalsServiceService, private activatedRoute: ActivatedRoute) {  }

  ngOnInit(): void {
    this.animalid = this.activatedRoute.snapshot.params["animalid"];

    this.animalSvc.get().pipe(
      tap((animals: AnimalsInterface[]) => this.animal = animals.filter(item => item.id === this.animalid)[0])
    )
    .subscribe();
  }*/

  animal!:Animals;
  animalid!:string;
  alreadyinterested!:boolean;

  constructor(private _databaseService: DatabaseService, private activatedRoute: ActivatedRoute) { }
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

    this.animalid = this.activatedRoute.snapshot.params["animalid"];
    console.log(this.animalid);
    this.getAnimal();
    this.checkInterest();
    console.log(this.animal);
    
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

  addInterest(){
    this.animal.interested.push(this.loggedaccount.email);
    this._databaseService.updateAnimalInterested(this.animal.id, this.animal.interested);
  }


  async checkInterest(){
    if(this.animal != undefined || this.animal != null){
      if (this.animal.interested.find(x => x === this.loggedaccount.email) != undefined){
        this.alreadyinterested = true;
      }
      this.alreadyinterested = false;
    }
    
  }
}
