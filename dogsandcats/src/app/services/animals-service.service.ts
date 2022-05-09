import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalsInterface } from '../interfaces/animals-interface';

@Injectable({
  providedIn: 'root'
})
export class AnimalsServiceService {
  private apiURL = "http://localhost:3000/animales";
  constructor(private http: HttpClient) { }

  get():Observable<AnimalsInterface[]>{
    return this.http.get<AnimalsInterface[]>(this.apiURL);
  }
}
