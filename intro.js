//-------------------Variables--string - numbrer - boolean---------------

/*
var nombre = "carlos";
alert(nombre);
*/

//--------------para ingresar nombres, alerta en pantalla---------------

/*
var nombre;
var edad;
nombre = prompt("ingresa tu nombre");
edad = prompt("ingresa tu edad");
document.write(nombre + " " edad);
console.log(nombre);
*/


/*------- tipos de datos--------
- numerico, int o float
- string
- array 
- objects
- boolean
- undefined
- Null
- NAN
*/
//----float-----

/*
//number float
var edad= 19.1234;

//string
var nombre = "carlos \"comillas\" ";


//arreglo
var amigos = ["carlos", "alejandro", "cesar", 29, true];
console.log(amigos[0]);


//object - objeto
var objecto = {
    color:"Black",
    size:12
}

//boolean ----- true o false
var tipo = true;


//Undefined
var tipo2;
console.log(tipo2);


//Null - valor a nulo - borrar el valor
var tipo3 = 10;
var tipo3= null;


//NaN
var tipo4 = "hola como estas?";
console.log(tipo4*2); // falso / invalido --> multiplica texto 

*/


// ----------- Arreglos - Arrays ---------------------- 
//var amigos = ["Carlos", "Cesar", "Alex"];
//document.write(amigos[0]);

//---cambiar items
//amigos[0]="Arturo";

//-------cantidad en el arreglo
//amigos.length;


/*
// Condiciones
var nombre="Carlos",
    edad = 19;

if(nombre=="Carlos")){
    //......
}else{ 
    //....
}
*/


//----------------Scope--------

/*
var tipo1="hola";
var miFunction = function(){
    alert(tipo1);
    tipo1="hola 2";
    alert(tipo1);
}
miFunction();
*/




//------------------------ECMASCRIPT 6-----------------------
