"use strict";

//parametros REST
// '...datos ------guarda todo los parametros en datos'  
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

mostrarDatos('Carlos', 24, 'ok@ok', 'Argentina'); //----------parametros SPREAD-----------------

var mostrarDatos2 = function mostrarDatos2() {
  for (var _len2 = arguments.length, datos = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    datos[_key2] = arguments[_key2];
  }

  console.log(datos);
};

var arregloDatos = ['Alejandro', 30, 'ok@ok', 'mexico'];
mostrarDatos2.apply(void 0, arregloDatos);