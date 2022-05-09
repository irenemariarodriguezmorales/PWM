import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountsInterface } from '../interfaces/accounts-interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsServiceService {

  private apiURL = "http://localhost:3000/usuarios";
  constructor(private http: HttpClient) { }

  get():Observable<AccountsInterface[]>{
    return this.http.get<AccountsInterface[]>(this.apiURL);
  }
}
