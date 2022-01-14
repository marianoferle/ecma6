
//alt + 96 comillas invertidas ----> `


const nombres = ["Carlos","Alejandro","Manuel","Cesar"];

//-------tipo flecha optimizada-----
//const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} numero de caracteres`);

const numero_caracteres = nombres.map((nombre) => {  
    return `${nombre} tiene ${nombre.length} numero de caracteres`;
});


console.log(numero_caracteres);

/*
    //function flecha
    (parametro) => {
        return //codigo a ejecutar
    }

*/