// Eliminar de Local Storage
localStorage.clear();

localStorage.removeItem('nombre');


/*document.querySelector('#submit-buscador').addEventListener('click', function(e){
    e.preventDefault();
    alert('buscando cursos')
})
*/

/* document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();
    let elemento;
    elemento = e;

    elemento = e.target;
    elemento = e.target.id
    ;




    console.log(elemento);

}
*/
/*
document.querySelector('#encabezado').addEventListener('click', function(e){
    e.target.innerText = 2 + 3 ;

})
*/

/*const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');
*/
// Click

//boton.addEventListener('click', obtenerEvento);

// Doble Click

//boton.addEventListener('dblclick', obtenerEvento);

/*
boton.addEventListener('mouseover', obtenerEvento);

function obtenerEvento(e){
    console.log(`EVENTO: ${e.type}`);
}
*/

const busqueda =  document.querySelector('#buscador');

busqueda.addEventListener('keydown', obtenerEvento);

function obtenerEvento(e){
    console.log(busqueda.value);
    console.log(`EVENTO: ${e.type}`);
}