import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accounts } from '../interfaces/accounts';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['../../styles/estilos.css'],
})
export class NewsPage implements OnInit {

  new1 = 'Dogs & Cats ONG reciben el premio a la mejor organización de animales de Canarias El presidente del cabildo, Antonio Morales, entregó ayer el premio Mejor Organización de Animales de Canarias \
  a Dogs & Cats ONG. El acto tuvo lugar en el auditorio Alfredo Kraus  en Las Palmas el sábado 12 de febrero por la tarde.\
  Se otorgó una medalla por el trabajo de todos los voluntarios y dueños de la organización';

  img1 ='https://firebasestorage.googleapis.com/v0/b/dogsandcatsong-ded69.appspot.com/o/PageUIImages%2Fauditorio.jpg?alt=media&token=0fd14fad-4739-43d2-971b-460ce854322d';
  

  new2 = 'Gala solidaria el 18 de junio de 2022 en el Alfredo Kraus a las 20:00h.\
  El próximo 18 de junio se llevará a cabo una gala solidaria para nuestra asociación ya que \
  necesitamos ampliar nuestras instalaciones y comprar más medicinas para nuestros animales.\
  Las entradas estarán disponibles a partir del 1 de junio en Entrees.\
  En la gala recibiremos a varios especialistas que nos hablarán de cómo cuidar bien a los \
  animales, alimentarlos y saber si están felices o no.\
  ¡Os esperamos!';

  img2 = "https://firebasestorage.googleapis.com/v0/b/dogsandcatsong-ded69.appspot.com/o/PageUIImages%2Fgala.jpg?alt=media&token=0fc550f3-5489-4a66-97b9-44c863884eb5";


  newid !: number;
  newToShow !: string;
  imgToShow!: string;
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
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loggedaccount.id = sessionStorage.getItem("id");
    this.loggedaccount.email = sessionStorage.getItem("email");
    this.loggedaccount.name = sessionStorage.getItem("name");
    this.loggedaccount.type = sessionStorage.getItem("type");
    
    this.newid = +this.activatedRoute.snapshot.params['newid'];
    if(this.newid == 1) {
      this.newToShow = this.new1;
      this.imgToShow = this.img1;
    } else {
      this.newToShow = this.new2;
      this.imgToShow = this.img2;
    }
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
