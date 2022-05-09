import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsInterface } from '../interfaces/animals-interface';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['../../styles/Main_style.css']
})
export class AddAnimalComponent implements OnInit {

  id: string = "X";
  animal!:AnimalsInterface;

  constructor(private router: Router, private _databaseService: DatabaseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
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

  updateAnimal(id:string) {
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

}
