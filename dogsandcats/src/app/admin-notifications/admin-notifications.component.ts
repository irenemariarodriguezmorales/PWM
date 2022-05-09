import { Component, OnInit } from '@angular/core';
import { AnimalsInterface } from '../interfaces/animals-interface';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['../../styles/Main_style.css']
})
export class AdminNotificationsComponent implements OnInit {

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
