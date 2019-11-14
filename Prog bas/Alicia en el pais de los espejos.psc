Algoritmo Alicia
	Definir num, base, div, res, i Como Entero;
	Definir resultado, palindromo Como Caracter;
	Escribir "Alicia en el pais de los espejos";
	Escribir "Dijita el numero en base 10";
	Leer num;
	
	Para base = 2 hasta num con Paso 1
		Resultado = "";
		palindromo = "";
		div = num;
		Mientras div >= base Hacer
			res = div % base;
			div = trunc(div / base);
			resultado = resultado + ConvertirATexto(res);
			Si div < base Entonces
				resultado = resultado + ConvertirATexto(div);
			FinSi
		FinMientras
		Escribir "Base:", base, ":", resultado;
		
		Para i = Longitud(resultado) hasta 0  Con Paso -1 Hacer
			palindromo = palindromo + SubCadena(resultado,i,i);
		FinPara
		//Escribir "Palindromo:", palindromo;
		
		Si resultado = palindromo Entonces
			Escribir "La base mas pequeña es:", base;
			// break;
			base = num + 1;
		FinSi
	FinPara
FinAlgoritmo
