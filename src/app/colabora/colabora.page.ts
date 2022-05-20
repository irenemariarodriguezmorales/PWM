import { Component, OnInit } from '@angular/core';
import { Accounts } from '../interfaces/accounts';

@Component({
  selector: 'app-colabora',
  templateUrl: './colabora.page.html',
  styleUrls: ['../../styles/estilos.css'],
})
export class ColaboraPage implements OnInit {

  constructor() { }
  loggedaccount:Accounts = {
    id: '',
    email: '',
    name: '',
    surname: '',
    password: '',
    type: '',
    location: '',
    contact: ''
  };
  ngOnInit() {
    this.loggedaccount.id = sessionStorage.getItem("id");
    this.loggedaccount.email = sessionStorage.getItem("email");
    this.loggedaccount.name = sessionStorage.getItem("name");
    this.loggedaccount.type = sessionStorage.getItem("type");
  }
  getCurrentUser():Accounts{
    if (this.loggedaccount.id != "" && this.loggedaccount.id != null){
      return this.loggedaccount;
    }
    return null;
  }

  logOut(){
    sessionStorage.setItem("id", "");
    sessionStorage.setItem("email", "");
    sessionStorage.setItem("name", "");
    sessionStorage.setItem("type", "");
  }

}
