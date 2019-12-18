import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: '../mi-componente.component.html'
})
export class MiComponente {

        public titulo: string;
        public comentario: string;
        public year: number;
        public mostrarPeliculas: boolean;
    
        constructor(){
            this.titulo = "Hola mundo, soy MI COMPONENTE 2";
            this.comentario = "Este es mi primer componente 2";
            this.year = 2010;
            this.mostrarPeliculas = true;

            console.log(" Componente mi-componete cargado !!");
            console.log(this.titulo, this.comentario, this.year);
        }
        ocultarPeliculas(){
            this.mostrarPeliculas = false;
        }
}