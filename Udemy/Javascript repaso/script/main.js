/*
var nombre = "Guillermo Godoy";
var altura = 175;
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${altura} cm</h3>
`;

if(altura >= 172){
    datos.innerHTML += "<h1>Eres una persona ALTA</h1>";
}else{
    datos.innerHTML += "<h1>Eres una persona BAJITA</h1>";
}

for(var i = 2000; i<=2020; i++){
    datos.innerHTML += "<h2>Estamos en el año: "+i; 
}
*/
function MuestraMiNombre(nombre, altura){
var misDatos = `
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${altura} cm</h3>
`;
return misDatos;
}

function imprimir (){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Godoy Guillermo R", 175);
}
imprimir()

/*
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + "<br/>");
}
*/

var nombres = ["Victor", "Antonio", "Joaco"]
document.write("</h1>Listado de nombres</h1>" + "<br/>");

nombres.forEach((nombre) =>
 {document.write(nombre + "<br/>");})