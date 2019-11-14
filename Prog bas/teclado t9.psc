Algoritmo TecladoT9
	Definir i, il, in Como Entero;
	Definir num, letras, frase, un, teclas Como Caracter;
	Dimension num[27], letras[27];
	
	letras[0] = "a";
	letras[1] = "b";
	letras[2] = "c";
	letras[3] = "d";
	letras[4] = "e";
	letras[5] = "f";
	letras[6] = "g";
	letras[7] = "h";
	letras[8] = "i";
	letras[9] = "j";
	letras[10] = "k";
	letras[11] = "l";
	letras[12] = "m";
	letras[13] = "n";
	letras[14] = "o";
	letras[15] = "p";
	letras[16] = "q";
	letras[17] = "r";
	letras[18] = "s";
	letras[19] = "t";
	letras[20] = "u";
	letras[21] = "v";
	letras[22] = "w";
	letras[23] = "x";
	letras[24] = "y";
	letras[25] = "z";
	letras[26] = " ";
	
	num[0] = "2";
	num[1] = "22";
	num[2] = "222";
	num[3] = "3";
	num[4] = "33";
	num[5] = "333";
	num[6] = "4";
	num[7] = "44";
	num[8] = "444";
	num[9] = "5";
	num[10] = "55";
	num[11] = "555";
	num[12] = "6";
	num[13] = "66";
	num[14] = "666";
	num[15] = "7";
	num[16] = "77";
	num[17] = "777";
	num[18] = "7777";
	num[19] = "8";
	num[20] = "88";
	num[21] = "888";
	num[22] = "9";
	num[23] = "99";
	num[24] = "999";
	num[25] = "9999";
	num[26] = "0";
	
	Escribir "Teclado T9";
	Escribir "Digite una frase";
	Leer frase;
	i = buscar("j", letras);
	Escribir "La letra se encuentra en el ìndice: ", i;
	Escribir "la pulsación es: ", num[i];
FinAlgoritmo

SubAlgoritmo x = buscar(letra, letras)
	Definir x, i Como Entero;
	x = - 1;
	Para i = 0 hasta 26 Con Paso 1 HAcer
		Si letra = letras[i] Entonces
			x = i;
			//break;
			i = 27;
		FinSi
	FinPara
FinSubAlgoritmo

