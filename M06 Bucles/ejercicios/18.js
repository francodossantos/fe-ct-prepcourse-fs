function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = a; // Inicializar con el valor de 'a' en lugar de 1

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  
  for (let i = a + 1; i <= b; i++) { // Comienza el bucle desde 'a + 1'
    producto *= i;
  }
  
  return producto;
  
}

module.exports = productoEntreNúmeros;