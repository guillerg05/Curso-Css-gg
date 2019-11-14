Algoritmo Credito
	Definir C, L, P, i, j Como Entero;
	Escribir "Credito de la Tienda";
	Escribir "Valor del Crédito";
	Leer C;
	Escribir "Cantidad de productos";
	Leer L;
	Dimension P[L];
	
	//leer el valor de los productos
	Para i = 0 hasta L - 1 Con Paso 1 Hacer
		Escribir "Digite el valor del producto:";
		Leer P[i];
	FinPara
	
	// Ejecutar el proceso
	
	Para i = 0 hasta L - 1  Con Paso 1 Hacer
		Para j = i + 1 Hasta L - 1 Con Paso 1 Hacer
			Si P[i] + P[j] = C Entonces
				Escribir i + 1 , " ", j + 1;
				// break;
				j = L;
				i = L;
			FinSi
		FinPara
	FinPara
	
FinAlgoritmo






