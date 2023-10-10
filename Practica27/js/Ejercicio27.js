var peso = prompt("Escribe su peso");
var opcion = prompt("Ingrese una opcion");
var peso_tierra = 9.807;
var peso_marte = 3.71;
var peso_jupiter = 24.79;
var resultado;

switch(opcion){
    case "1":
        resultado = peso * peso_marte / peso_tierra;
        alert("Su peso en marte es: " + resultado);
        break;

    case "2":
        resultado = peso * peso_jupiter / peso_tierra;
        alert("Su peso en jupiter es: " + resultado);
        break;
        
    default:
        alert("No existe esa opción");
        break;
}

/*if (opcion == 1 ) {
    resultado = peso * peso_marte / peso_tierra;
    alert("Su peso en marte es: " + resultado);
} else if (opcion == 2){
    resultado = peso * peso_jupiter / peso_tierra;
    alert("Su peso en jupiter es: " + resultado);
}else{
    alert("No existe esa opción");
}*/

/* KIMBERLY JAZMIN TREJO ESTRADA 372 */