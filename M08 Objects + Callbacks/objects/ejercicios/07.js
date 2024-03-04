// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    datos: {

        miNombre: 'Franco',
    },
        
    info: function () { 
        console.log("El nombre de Dos Santos es " + this.datos.miNombre);
    }
};
objetoAnidado.info();

module.exports = objetoAnidado;
