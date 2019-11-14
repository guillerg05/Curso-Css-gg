Algoritmo EntrarDisco
	Definir mayoriaEdad, edad, faltante Como Entero;
	Definir years Como Caracter;
	mayoriaEdad = 18;
	Escribir "Bienvenido a la Disco La Rumba";
	Escribir "Solo pueden entrar mayores de edad";
	Escribir "Por favor, digita tu edad";
	leer edad;
	
	Si edad >= mayoriaEdad Entonces
		Escribir "Bienvenido al Antro mas antro de los antros";
	SiNo
		faltante = mayoriaEdad - edad;
		Si faltante = 1 Entonces
			years = " año";
		Sino 
			years = " años";
		FinSi
		Escribir "No puedes ingresar";
		Escribir "puedes volver dentro de: ", faltante, years,".";
		FinSi
Escribir "Gracias por visitarnos";	
FinAlgoritmo
