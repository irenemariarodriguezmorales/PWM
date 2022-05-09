import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { AnimalsInterface } from '../interfaces/animals-interface';
import { AnimalsServiceService } from '../services/animals-service.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-selectedanimal',
  templateUrl: './selectedanimal.component.html',
  styleUrls: ['../../styles/estilos.css']
})
export class SelectedanimalComponent implements OnInit {

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

  animal!:AnimalsInterface;
  animalid!:string;

  constructor(private _databaseService: DatabaseService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.animalid = this.activatedRoute.snapshot.params["animalid"];
    this.getAnimal();
    
  }

  async getAnimal() {
    let aux = await this._databaseService.getAllAnimals();
      for(let i = 0; i <= aux.length; i++) {
        if(aux[i].id==this.animalid) {
          this.animal=aux[i];            
        }
      }
  }


}