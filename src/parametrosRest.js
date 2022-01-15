
//parametros REST
// '...datos ------guarda todo los parametros en datos'  

const mostrarDatos = (...datos) => {
    console.log(datos);
}


mostrarDatos('Carlos', 24,'ok@ok', 'Argentina');



//----------parametros SPREAD-----------------
const mostrarDatos2 = (...datos) => {
    console.log(datos);
}

const arregloDatos = ['Alejandro', 30,'ok@ok', 'mexico'];
mostrarDatos2(...arregloDatos);
