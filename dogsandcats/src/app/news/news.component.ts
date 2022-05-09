import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { NewsInterface } from '../interfaces/news-interface';
import { NewsServiceService } from '../services/news-service.service';
import { ActivatedRoute } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../../styles/estilos.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

 /* news !: NewsInterface[];
  newid !: number;
  constructor(private newSvc: NewsServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.newSvc.get().pipe(
      tap((allnews: NewsInterface[]) => this.news = allnews)
    )
    .subscribe();

    this.newid = +this.activatedRoute.snapshot.params['newid'];
  }*/

  new1 = 'Dogs & Cats ONG reciben el premio a la mejor organización de animales de Canarias El presidente del cabildo, Antonio Morales, entregó ayer el premio Mejor Organización de Animales de Canarias \
  a Dogs & Cats ONG. El acto tuvo lugar en el auditorio Alfredo Kraus  en Las Palmas el sábado 12 de febrero por la tarde.\
  Se otorgó una medalla por el trabajo de todos los voluntarios y dueños de la organización';

  img1 ='assets/images/auditorio.jpg';
  

  new2 = 'Gala solidaria el 18 de junio de 2022 en el Alfredo Kraus a las 20:00h.\
  El próximo 18 de junio se llevará a cabo una gala solidaria para nuestra asociación ya que \
  necesitamos ampliar nuestras instalaciones y comprar más medicinas para nuestros animales.\
  Las entradas estarán disponibles a partir del 1 de junio en Entrees.\
  En la gala recibiremos a varios especialistas que nos hablarán de cómo cuidar bien a los \
  animales, alimentarlos y saber si están felices o no.\
  ¡Os esperamos!';

  img2 = "assets/images/gala.jpg";
  //<img src="Imagenes/gala.jpg" alt="Gala" class="gala">';

  newid !: number;
  newToShow !: string;
  imgToShow!: string;

  constructor(private newSvc: NewsServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.newid = +this.activatedRoute.snapshot.params['newid'];
    if(this.newid == 1) {
      this.newToShow = this.new1;
      this.imgToShow = this.img1;
    } else {
      this.newToShow = this.new2;
      this.imgToShow = this.img2;
    }
  }

}
