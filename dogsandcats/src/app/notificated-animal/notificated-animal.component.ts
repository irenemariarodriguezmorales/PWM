import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { AnimalsInterface } from '../interfaces/animals-interface';
import { AnimalsServiceService } from '../services/animals-service.service';

@Component({
  selector: 'app-notificated-animal',
  templateUrl: './notificated-animal.component.html',
  styleUrls: ['../../styles/Main_style.css']
})
export class NotificatedAnimalComponent implements OnInit {

  animal !: AnimalsInterface[];
  animalid !: string;
  constructor(private newSvc: AnimalsServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.animalid = this.activatedRoute.snapshot.params['animalid'];
    this.newSvc.get().pipe(
      tap((animals: AnimalsInterface[]) => this.animal = animals.filter(item => item.id === this.animalid))
    )
    .subscribe();
  }
}