"use strict";

//alt + 96 comillas invertidas ----> `
var nombres = ["Carlos", "Alejandro", "Manuel", "Cesar"]; //-------tipo flecha optimizada-----
//const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} numero de caracteres`);

var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " numero de caracteres");
});
console.log(numero_caracteres);
/*
    //function flecha
    (parametro) => {
        return //codigo a ejecutar
    }

*/