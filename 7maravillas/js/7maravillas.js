//arreglo maravillas en el cual se guardan las imagenes
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];
//arreglo de respuestas correctas
let correcta = [1,0,2,1,2,0,1];

//arreglo vacio de las opciones a mostrar
let opciones = [];

//arreglo el cual mete las opciones al arreglo de arriba
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

let posActual = 0;//variable en la cual se guarda la posicion en el juego
let cantidadAcertadas = 0;// variable que almacen alas respuestas correctas

function comenzarJuego(){//funcion en la cual se inicializa el juego
    posActual = 0;//se declara el valor de la posicion alcual
    cantidadAcertadas = 0;//se declara el valor de las respuestas acertadas
    document.getElementById("pantalla-inicial").style.display = "none";//oculta la pantalla inicial
    document.getElementById("pantalla-juego").style.display = "block";//muestra la pantalla del juego
    cargarMaravilla();//carga la siguiente maravilla

}

function cargarMaravilla(){
    if(maravillas.length <= posActual){//compara la posicion actual, para saber si ya se mostro todo el arreglo
        terminarJuego();//si ya se mostraron todas se termina el juego
    }
    else{// si no 
        limpiarOpciones(); //se limpian las opciones

        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];// y se muestra lo que sigue del arreglo
        document.getElementById("n0").innerHTML = opciones[posActual][0]; //opciones a mostrar
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){//limpia el contenido de las opciones
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
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
    setTimeout(cargarMaravilla,1000);//tiempo para pasar a la siguiente maravilla
}
function terminarJuego(){//funcion declara para terminar el juego
    document.getElementById("pantalla-juego").style.display = "none";//oculta la pantalla del juego
    document.getElementById("pantalla-final").style.display = "block";//muestra la pantalla final
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;//toma el valor de respuestas acertadas
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;// calcula el valor de respuestas incorrectas
}

function volverAlInicio(){//funcion declarada para volver al inicio
    document.getElementById("pantalla-final").style.display = "none";//oculta la pantalla final
    document.getElementById("pantalla-inicial").style.display = "block";//muestra la pantalla inicial
    document.getElementById("pantalla-juego").style.display = "none";//oculta la patalla de juego
}
//KIMBERLY JAZMIN TREJO ESTRADA