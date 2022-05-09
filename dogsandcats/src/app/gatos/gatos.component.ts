import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AnimalsInterface } from '../interfaces/animals-interface';
import { AnimalsServiceService } from '../services/animals-service.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['../../styles/estilos.css']
})
export class GatosComponent implements OnInit {
  animals:AnimalsInterface[]=[];

 /* animals!:AnimalsInterface[];
  constructor(private gatosSvc: AnimalsServiceService) { }

  ngOnInit(): void {
    this.gatosSvc.get().pipe(
      tap((animals: AnimalsInterface[]) => this.animals = animals.filter(item=>item.type==="gato"))
    )
    .subscribe();
  }*/

  constructor(private _databaseService: DatabaseService) { }


  ngOnInit(): void {

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
 
  
}