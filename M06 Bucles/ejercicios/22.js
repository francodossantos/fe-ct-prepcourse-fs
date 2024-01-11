function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  do {
    if (mes < 1 || mes > 12) {
      // Solicitar al usuario que ingrese un mes válido si está fuera del rango
      mes = parseInt(prompt("Ingresa un número de mes válido (entre 1 y 12):"));
    }
  } while (mes < 1 || mes > 12);

  switch (mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      return 31; // El mes tiene 31 días
    case 4: case 6: case 9: case 11:
      return 30; // El mes tiene 30 días
    case 2:
      // Aquí necesitas agregar lógica para determinar la cantidad de días en febrero
      // Puedes dar una pista al usuario o simplemente asumir que es un año no bisiesto
      return "Febrero tiene 28 o 29 días en un año no bisiesto.";
  }
  
 
}


module.exports = diasEnMes;
