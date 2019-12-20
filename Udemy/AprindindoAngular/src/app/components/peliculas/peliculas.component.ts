import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
 
  public titulo: string;
  public peliculas: Array<any>;

  constructor() { 
    this.titulo = "Componente peliculas";
    this.peliculas = [
      {year: 2019, title: "Spiderman 4", image: 'https://img-cdn.hipertextual.com/files/2018/10/venom_ruben_fleischer_2.jpg?strip=all&lossy=1&quality=57&resize=740%2C490&ssl=1'},
      {year: 2018, title: "Los Vengadores Endgame", image: 'https://as.com/tikitakas/imagenes/2019/04/06/portada/1554566621_000164_1554566834_noticia_normal.jpg'},
      {year: 2015, title: "Batman vs Superman", image: 'https://img.europapress.es/fotoweb/fotonoticia_20160322233405_1280.jpg'},
      {year: 2011, title: "Batman vs Superman", image: 'https://img.europapress.es/fotoweb/fotonoticia_20160322233405_1280.jpg'}
    ];
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log("Componente iniciado!!!")
  }
  
  ngDoCheck(){
    console.log("DOCHECK LANZADO");
  }

  cambiarTitulo(){
    this.titulo= "El titulo ha sido cambiado!!"
  }
  
  ngOnDestroy(){
    console.log("EL COMPONENTE SE VA A ELIMINAR");
  }

}
