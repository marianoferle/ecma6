const usuario = {
    nombre: "Mariano",
    correo: "ok@ok",
    edad: 24,
    pais: "Argentina"
    //profesion: "Desarrollador Web"
}

//------------no se ponen lugares vacios----- Pais
const {nombre, correo, pais, profesion= "no especificado"} = usuario;

//console.log(profesion); //no especificado


const mostrarInfo = ( {nombre, profesion = "Estudiante"} ) => console.log(`${nombre} es ${profesion}`);

mostrarInfo(usuario);