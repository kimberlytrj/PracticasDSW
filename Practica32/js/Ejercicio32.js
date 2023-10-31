function consulta() {
  var m1 = parseInt(document.getElementById("m1").value);
  var m2 = parseInt(document.getElementById("m2").value);
  var m3 = parseInt(document.getElementById("m3").value);
  var m4 = parseInt(document.getElementById("m4").value);
  var m5 = parseInt(document.getElementById("m5").value);
  var m6 = parseInt(document.getElementById("m6").value);
  var m7 = parseInt(document.getElementById("m7").value);
  var m8 = parseInt(document.getElementById("m8").value);
  
  if (isNaN(m1) || isNaN(m2) || isNaN(m3) || isNaN(m4) || isNaN(m5) || isNaN(m6) || isNaN(m7) || isNaN(m8)) {
    alert("Por favor, ingrese todas las notas.");
    
    if (isNaN(m1)) {
      document.getElementById("m1").focus();
    } else if (isNaN(m2)) {
      document.getElementById("m2").focus();
    } else if (isNaN(m3)) {
      document.getElementById("m3").focus();
    } else if (isNaN(m4)) {
      document.getElementById("m4").focus();
    } else if (isNaN(m5)) {
      document.getElementById("m5").focus();
    } else if (isNaN(m6)) {
      document.getElementById("m6").focus();
    } else if (isNaN(m7)) {
      document.getElementById("m7").focus();
    } else {
      document.getElementById("m8").focus();
    }
    
    return;
  }

  var promedio = (m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8) / 8;
  
  if (promedio > 85) {
    alert("Está exento de ordinario, Su promedio es de: " + promedio);
  } else {
    alert("Debe presentar examen ordinario, Su promedio es de: " + promedio);
  }

  alert("Asignatura 1: " + m1 + "\n" +
    "Asignatura 2: " + m2 + "\n" +
    "Asignatura 3: " + m3 + "\n" +
    "Asignatura 4: " + m4 + "\n" +
    "Asignatura 5: " + m5 + "\n" +
    "Asignatura 6: " + m6 + "\n" +
    "Asignatura 7: " + m7 + "\n" +
    "Asignatura 8: " + m8 + "\n");
}
//KIMBERLY JAZMIN TREJO ESTRADA