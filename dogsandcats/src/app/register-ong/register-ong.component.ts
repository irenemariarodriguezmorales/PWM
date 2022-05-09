import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register-ong',
  templateUrl: './register-ong.component.html',
  styleUrls: ['../../styles/Main_style.css']
})
export class RegisterONGComponent implements OnInit {

  constructor(private router: Router, private _databaseService: DatabaseService) { }

  ngOnInit(): void {
  }


  registerONG() {
    let name = (<HTMLInputElement>document.getElementById("ongname")).value;
    let email = (<HTMLInputElement>document.getElementById("ongmail")).value;
    let direccion = (<HTMLInputElement>document.getElementById("onglocation")).value;
    let code = (<HTMLInputElement>document.getElementById("ongzipcode")).value;
    let tlf = (<HTMLInputElement>document.getElementById("ongnumber")).value;
    let password = (<HTMLInputElement>document.getElementById("ongpassword")).value;
    let newId = this._databaseService.generateNewId();
    this._databaseService.addONG(newId, name,email,direccion,code,tlf,password);
    this.router.navigate(['mainpagecerrarsesion']);

  }

}
