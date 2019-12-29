import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4", 2019, "https://img-cdn.hipertextual.com/files/2018/10/venom_ruben_fleischer_2.jpg?strip=all&lossy=1&quality=57&resize=740%2C490&ssl=1"),
            new Pelicula("Los Vengadores Endgame", 2018, "https://as.com/tikitakas/imagenes/2019/04/06/portada/1554566621_000164_1554566834_noticia_normal.jpg"),
            new Pelicula("Batman vs Superman", 2011, "https://img.europapress.es/fotoweb/fotonoticia_20160322233405_1280.jpg")         
           ];
    }

    HolaMundo(){
        return 'Hola Mundo desde un servicio de Angular!!!';
    }

    getPeliculas(){
        return this.peliculas;
    
    }
}
