//EJEMPLO FUNCIÓN SIMPLE
/*var numero1 = 1, numero2 = 1, resultado;
function suma_y_muestra() {
    resultado = numero1 + numero2;
    alert("El resultado es " + resultado)
}
suma_y_muestra();*/

//EJEMPLO FUNCIÓN CON VALORES DE RETORNO
/*function suma_y_muestra(primerNumero, SegundoNumero) {
    var resultado = primerNumero + SegundoNumero;
    alert("El resultado es " + resultado);
}
suma_y_muestra(numero1, numero2);*/

//EJEMPLO CON RETURN
/*function suma_y_muestra() {
    return numero1 + numero2;
}
alert("El resultado es " + suma_y_muestra());*/

//EJERCICIO 1
var numero = parseInt(prompt("Ingrese un numero"));
function par_impar (num){
    if (num%2 === 0){
        alert("El numero ingresado es par");
    } else{
        alert("El numero ingresado es impar");
    }
}
par_impar(numero);

//EJERCICIO 2
var hayUnHuracan = true;
function avisoDeHuracan(huracan){
    if (huracan == true){
        alert("Hay un huracan");
    }else {
        alert("Esta soleado");
    }
}
avisoDeHuracan(hayUnHuracan);

//EJERCICIO 3
var operacion = prompt("Indique la operación a llevar a cabo");
var a = parseInt(prompt("Ingrese el numero 1"));
var b = parseInt(prompt("Ingrese el numero 2"));
function OpercacionesMatematicas(op, n1, n2){
    var resultado;
    switch(op){
        case "suma":
            resultado = n1 + n2;
            alert("El resultado de la suma es " + resultado);
            break;

        case "resta":
            resultado = n1 - n2;
            alert("El resultado de la resta es " + resultado);
            break;

        case "multiplicacion":
            resultado = n1 * n2;
            alert("El resultado de la multiplicación es " + resultado);
            break;

        case "division":
            resultado = n1 / n2;
            alert("El resultado de la division es " + resultado);
            break;

        case "residuo":
            resultado = n1 % n2;
            alert("El resultado del residuo es " + resultado);
            break;
        
        default:
            alert("La operación ingresada no es valida");
    }
}
OpercacionesMatematicas(operacion, a, b);

/* KIMBERLY JAZMIN TREJO ESTRADA 372 */