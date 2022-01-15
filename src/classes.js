class Usuario{
    constructor(nombre, edad, correo){
        this.nombre = nombre,
        this.edad = edad,
        this.correo = correo
    }

    mostrarSaludo(mensaje){
        return mensaje;
    }

    mostrarInfo(){
        return `
        <b>Nombre:</b> ${this.nombre} <br />
        <b>Edad:</b> ${this.edad} <br />
        <b>Correo:</b> ${this.correo} <br />
        <hr />
        `;
    }

}


// instancia de USUARIO  - 
const carlos = new Usuario('Carlos', 23,'ok@ok');
document.write(carlos.mostrarInfo());


/* ---------------- herencia -------------------------*/
class Estudiante extends Usuario{
    constructor(nombre, edad, correo, carrera){
        super(nombre, edad, correo); //ejecuta el constructor de Usuario
        this.carrera = carrera;
    }

    mostrarInfo(){
        return `
        <b>Nombre:</b> ${this.nombre} <br />
        <b>Edad:</b> ${this.edad} <br />
        <b>Correo:</b> ${this.correo} <br />
        <b>Carrera</b> ${this.carrera} <br />
        <hr />
        `;
    }
}


const alejandro = new Estudiante('Alejandro',30, 'ok@ok', 'Desarrollador Web');
document.write(alejandro.mostrarInfo());