var valores = [true, 10, false, "codigo", "herramientas", 7];

var valorMayor = valores[3] > valores[4];

var valorTrue = valores[0] != valores[2];
var valorFalse = valores[0] == valores[2];

var suma = valores[1] + valores[5];
var resta = valores[1] - valores[5];
var division = valores[1] / valores[5];
var multiplicacion = valores[1] * valores[5];


alert("El texto " + valores[3] + " es mayor que " + valores[4] + ": " + valorMayor + 
"\n\nEl valor " + valores[0] + " es diferente al valor " + valores[2] + ": " + valorTrue +
"\nEl valor " + valores[0] + " es igual al valor " + valores[2] + ": " + valorFalse +
"\n\nOperaciones basicas: \nSuma: " + suma + "\nResta: " + resta + "\nDivisión: " + division + "\nMultiplicación: " + multiplicacion);
/* KIMBERLY JAZMIN TREJO ESTRADA 372 */