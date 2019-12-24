import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
 
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor() { 
    this.titulo = "Componente peliculas";
    this.peliculas = [
      new Pelicula("Spiderman 4", 2019, "https://img-cdn.hipertextual.com/files/2018/10/venom_ruben_fleischer_2.jpg?strip=all&lossy=1&quality=57&resize=740%2C490&ssl=1"),
      new Pelicula("Los Vengadores Endgame", 2018, "https://as.com/tikitakas/imagenes/2019/04/06/portada/1554566621_000164_1554566834_noticia_normal.jpg"),
      new Pelicula("Batman vs Superman", 2011, "https://img.europapress.es/fotoweb/fotonoticia_20160322233405_1280.jpg")         
     ];
     this.fecha = new Date(2020, 8, 12);
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

  mostrarFavorita(event){
   this.favorita = event.pelicula;
  }

}
