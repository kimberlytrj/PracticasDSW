//EJERCICIO 4
for (var i=0; i < 7; i++) {
    console.log("Hola");
    if (i==3){
        console.log("Soy el 4to"); 
    }else if (i==6){
        console.log("Acabamos de saludar");
    }
}

//EJERCICIO 5
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"]

//FOR IN
for (var i in meses){
    console.log(meses[i]);
}

//FOREACH
meses.forEach(function(mes){
    console.log(mes);
});

//FOR OF
for (var mes of meses) {
    console.log("\n");
}

//EJERCICIO 6
for (var mes of meses) {
    if (mes === "Julio") {
        continue;
    }
    console.log(mes);
}

var diciembre = "Diciembre";

for (let mes of [...meses, diciembre]) {
    console.log(mes);
}

/* KIMBERLY JAZMIN TREJO ESTRADA 372 */