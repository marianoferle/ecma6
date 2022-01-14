const persona = ["Carlos", 24, 'mexico', 'desarrollador web'];

const [nombre, edad, pais, profesion = "No especificado"] = persona;

/*
console.log(nombre);


const mostrarInfo = ([nombre, , pais] = persona) => {
    console.log(nombre, pais);
}
*/

//flecha
const mostrarInfo = ([nombre, , pais, profesion = "no especificado"] = persona) => console.log(nombre, profesion);

mostrarInfo(persona);
