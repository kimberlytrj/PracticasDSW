//arreglo personajes en el cual se guardan las imagenes
let personajes = ["blackpanther.svg", "chewbacca.svg", "kimpossible.svg", "mandalorian.svg", "miguel.svg","moana.svg","mirabel.svg","elsa.svg","woody.svg","ironman.svg"];
//arreglo de respuestas correctas
let correcta = [1,0,2,1,2,0,3,1,2,0];

//arreglo de las opciones a mostrar
let opciones = [];

//arreglo el cual mete las opciones al arreglo de arriba
opciones.push(["Frozen", "Black Panther", "Encanto", "Toy-Story"]);
opciones.push(["Star Wars", "The Avengers", "Moana", "Coco"]);
opciones.push(["Encanto", "Frozen", "Kim Possible", "Moana"]);
opciones.push(["Kim Possible", "Star Wars", "The avengers", "Coco"]);
opciones.push(["Black Panther", "Encanto", "Coco", "Frozen"]);
opciones.push(["Moana", "The avengers", "Toy-Story", "Kim Possible"]);
opciones.push(["Toy-Story", "Black Panther", "Moana", "Encanto"]);
opciones.push(["Kim Possible", "Frozen", "Coco", "Black Panther"]);
opciones.push(["Black Panther", "Frozen", "Toy-Story", "Star Wars"]);
opciones.push(["The Avengers", "Coco", "Star Wars", "Kim Possible"]);

let posActual = 0;//variable en la cual se guarda la posicion en el juego
let cantidadAcertadas = 0;// variable que almacen alas respuestas correctas

function comenzarJuego(){//funcion en la cual se inicializa el juego
    posActual = 0;//se declara el valor de la posicion alcual
    cantidadAcertadas = 0;//se declara el valor de las respuestas acertadas
    document.getElementById("pantalla-inicial").style.display = "none";//oculta la pantalla inicial
    document.getElementById("pantalla-juego").style.display = "block";//muestra la pantalla del juego
    cargarPersonaje();//carga el siguiente personaje

}

function cargarPersonaje(){
    if(personajes.length <= posActual){//compara la posicion actual, para saber si ya se mostro todo el arreglo
        terminarJuego();//si ya se mostraron todas se termina el juego
    }
    else{// si no 
        limpiarOpciones(); //se limpian las opciones

        document.getElementById("imgPersonaje").src = "img/" + personajes[posActual];// y se muestra lo que sigue del arreglo
        document.getElementById("n0").innerHTML = opciones[posActual][0]; //opciones a mostrar
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}

function limpiarOpciones(){//limpia el contenido de las opciones
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

function comprobarRespuesta(opElegida){//compara la respuesta con la opcion elegida
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;//se suma a la variable de cadidad acertadas
    }else{//si no acerto
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;//avanza a la siguiente posicion
    setTimeout(cargarPersonaje,1000);//tiempo para pasar al siguiente personaje
}
function terminarJuego(){//funcion declara para terminar el juego
    document.getElementById("pantalla-juego").style.display = "none";//oculta la pantalla del juego
    document.getElementById("pantalla-final").style.display = "block";//muestra la pantalla final
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;//toma el valor de respuestas acertadas
    document.getElementById("numIncorrectas").innerHTML = personajes.length - cantidadAcertadas;// calcula el valor de respuestas incorrectas
}

function volverAlInicio(){//funcion declarada para volver al inicio
    document.getElementById("pantalla-final").style.display = "none";//oculta la pantalla final
    document.getElementById("pantalla-inicial").style.display = "block";//muestra la pantalla inicial
    document.getElementById("pantalla-juego").style.display = "none";//oculta la patalla de juego
}
//KIMBERLY JAZMIN TREJO ESTRADA