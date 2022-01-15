"use strict";

//-----------PROMESAS----------AJAX-------------------
var promesa = new Promise(function (resolve, reject) {
  //----accion a ejecutar------
  //resolve() --- ejecuta la promesa si es exitosa
  //resolve();
  // si la promesa no fue exitosa se activa reject();
  //reject();
  //-------
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve('la operacion tuvo exito');
    } else {
      reject('la operacion no tuvo exito');
    }
  }, 4000);
}); //dentro de then va una function
//--------then es resolve()-----------

promesa.then(function (mensaje) {
  console.log('Hola mundo', mensaje);
}); //-------catch es reject()-----

promesa["catch"](function (mensaje) {
  console.log('No exitosa', mensaje);
});