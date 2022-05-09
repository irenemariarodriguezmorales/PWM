import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AnimalsInterface } from '../interfaces/animals-interface';
import { AnimalsServiceService } from '../services/animals-service.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['../../styles/estilos.css']
})
export class PerrosComponent implements OnInit {
  animals:AnimalsInterface[]=[];

 /* constructor(private perrosSvc: AnimalsServiceService) { }

  ngOnInit(): void {
    this.perrosSvc.get().pipe(
      tap((animals: AnimalsInterface[]) => this.animals = animals.filter(item => item.type === "perro"))
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
          if(aux[i].type=="perro") {
            this.animals[j]=aux[i];
            j++;
          }
        }
  }
    //this.animals = await this._databaseService.getPerro();
  
}