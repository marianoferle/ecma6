const crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarInfo(){
            return `${nombre} tiene ${edad} años `;
        }
    }
}

console.log(crearObjeto('Carlos', 23).mostrarInfo());