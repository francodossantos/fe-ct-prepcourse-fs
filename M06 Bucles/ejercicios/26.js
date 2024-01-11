function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  const stringSinEspacios1= str1.replace(/\s/g, '').toLowerCase();
  const stringSinEspacios2 = str2.replace(/\s/g, '').toLowerCase();
  
  const stringEnArray1 = stringSinEspacios1.split("").sort();
  const stringEnArray2 = stringSinEspacios2.split("").sort();

  const arrayEnString1 = stringEnArray1.join('');
  const arrayEnString2 = stringEnArray2.join('');

  if (arrayEnString1 === arrayEnString2) {
    return true;
  }
  return false;


  
  

}

module.exports = esAnagrama;
