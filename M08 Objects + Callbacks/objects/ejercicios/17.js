function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  objetoUsuario.password = nuevaPassword;
  return objetoUsuario;
  
  // Tu código:

}

module.exports = actualizarPassword;
