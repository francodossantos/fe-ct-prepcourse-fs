function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  let nuevoArreglo = [];

  for (let i = 0; i <10; i++){
    num +=2;
    nuevoArreglo.push(num);
    if (num === i) {
      break;
    }
  }
  if (nuevoArreglo.length === 10) {
    return nuevoArreglo;
  } else {
     
    return "Se interrumpió la ejecución";
  }


  // let nuevoArray=[];
  //   let iterador=0;

  //   while(iterador < 10){
    //       num = num + 2;
    //       if(num===iterador){
      //           break;
      //       }
      //       iterador++
  //       nuevoArray.push(num);
  //   }
  // if (iterador < 10) return "Se interrumpió la ejecución";
  // return nuevoArray;
}

module.exports = breakStatement;
