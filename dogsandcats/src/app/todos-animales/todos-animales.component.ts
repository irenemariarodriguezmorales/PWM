import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AnimalsInterface } from '../interfaces/animals-interface';
import { AnimalsServiceService } from '../services/animals-service.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-todos-animales',
  templateUrl: './todos-animales.component.html',
  styleUrls: ['../../styles/estilos.css']
})
export class TodosAnimalesComponent implements OnInit {
  animals!:AnimalsInterface[];

  //constructor(private perrosSvc: AnimalsServiceService) { }

  /*ngOnInit(): void {
    this.perrosSvc.get().pipe(
      tap((animals: AnimalsInterface[]) => this.animals = animals)
    )
    .subscribe();
  }*/

  constructor(private _databaseService: DatabaseService) { }


  ngOnInit(): void {

    this.getAnimals();
    
  }

  async getAnimals() {
    this.animals = await this._databaseService.getAllAnimals();
  }

}
