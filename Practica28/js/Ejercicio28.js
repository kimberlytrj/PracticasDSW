//Ciclo For
/*for (var i=0; i < 10; i++) {
    alert("Hola mundo");
}*/

//Ciclo While
/*var i = 10;
while (i <= 20){
    alert(i);
    i = i + 2;
}*/

//Ciclo Do While
/*do{
    i += 1;
    alert(i);
} while (i < 5);*/


//EJERCICIO 1
var arreglo = [];

for (var i = 1; i <= 7; i++) {
    var elemento = prompt(`Ingresa el dia de la semana ${i}:`);
    arreglo.push(elemento);
}

console.log(`El arreglo ingresado es: `);
for (var dia of arreglo) {
    console.log(dia);
}

var eliminar = prompt("Ingrese el numero de la ubicacion del elemento a eliminar: ");

arreglo.splice(eliminar-1, 1); 

console.log(`\nEl arreglo sin el dia en la posicion ${eliminar}: \n`); 

for (var dia of arreglo) {
    console.log(dia);
}
var numero = 1;
var suma = 0;

//EJERCICIO 2
var i = 1;
while (i <= 5){
    console.log(i);
    i = i + 1;
}

//EJERCICIO 3
var num = 1;
var factorial = 1;
do{
    factorial *= num;
    num++;
} while (num <6);
console.log("El factorial de numero 5 es " + factorial);

/* KIMBERLY JAZMIN TREJO ESTRADA 372 */