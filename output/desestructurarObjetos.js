"use strict";

var usuario = {
  nombre: "Mariano",
  correo: "ok@ok",
  edad: 24,
  pais: "Argentina" //profesion: "Desarrollador Web"

}; //------------no se ponen lugares vacios----- Pais

var nombre = usuario.nombre,
    correo = usuario.correo,
    pais = usuario.pais,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? "no especificado" : _usuario$profesion; //console.log(profesion); //no especificado

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? "Estudiante" : _ref$profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario);