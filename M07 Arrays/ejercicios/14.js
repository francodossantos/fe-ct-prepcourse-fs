function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  if (arguments.length === 0) {
    return 0;
  }

  let acumulador = 1;
  for (let i = 0; i < arguments.length; i++){

    acumulador *= arguments[i];
    
  }
  return acumulador;
}

module.exports = multiplicarArgumentos;
