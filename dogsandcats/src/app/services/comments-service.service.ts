import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsInterface } from '../interfaces/comments-interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsServiceService {

  private apiURL = "http://localhost:3000/comentarios";
  constructor(private http: HttpClient) { }

  get():Observable<CommentsInterface[]>{
    return this.http.get<CommentsInterface[]>(this.apiURL);
  }
}
