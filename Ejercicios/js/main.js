let lenguajes = ["HTML5", "35", "PHP"];

console.log(typeof(lenguajes));

let numero = 12345;

console.log(typeof(numero));

/*
let persona = {
  nombre: "César",
  aPaterno: "Arellano"
};

console.log(typeof(persona));
*/

let fecha = new Date();

console.log(fecha);
console.log(typeof(fecha));

const numeros = [7, 3, 10, 24, 5];
console.log(numeros);
console.table(numeros);


/* 
  Funciones con arreglos
  * push()
  * unshift();
  * pop();
  * shift();
  * splice();
  * reverse();
  * sort();
*/

const meses = new Array("Enero", "Febrero", "Marzo");

console.log(meses);

let lengthArray;
// Push
lengthArray = meses.push("Abril", "Mayo");
console.log(meses);
console.log(lengthArray);

//Unshift()
lengthArray = meses.unshift("Diciembre")

console.log(meses);
console.log(lengthArray);

meses.pop()

console.log(meses);

meses.splice(2,1);
console.log(meses);

meses.reverse();
console.log(meses);


meses.sort();
console.log(meses);

numeros.sort();
console.log(numeros);

/* Template strigs*/

const nombre = "César",
  trabajo = "Telematics BC"

  console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

console.clear();

/* Function declaration */
function saludar(nombre, trabajo = "No sabemos!") {
  console.log(`Hola ${nombre}, trabaja en ${trabajo}`);
}

saludar("César", "Telematics BC");

/* Function expression (Primero hay qye declarar antes de mandarla a llamar)*/
const hola = function() {
  console.log("Hola a todos");
}

hola();

const suma = function(a = 0, b = 0) {
  console.log(a+b);
}

suma();
suma(5,8);

/* Herramientas importantes */
//https://javascript-minifier.com/

// IIFE Funciones que se invocan automáticamente

(function(lenguaje) {
  console.log(`Me invoco automáticamente con ${lenguaje}`);
})("Javascript");

// Métodos de propiedad
const musica = {
  reproducir: function(cancion) {
    console.log(`Reproduciendo la canción '${cancion}'`);
  },
  pausar: function() {
    console.log('Pausa');
  }
}

musica.reproducir("Dale Calma");
musica.pausar();

// Funciones flecha que regresan un valor

const resta = (a= 0, b= 0) => a-b;
let resultado = resta(70,54);

console.log(resultado);

const multiplicarPorDiez = numero => numero *10;

let total = multiplicarPorDiez(3);

console.log(total);

let viajando = destino => `Viajando a la ciudad de ${destino}`;

let viaje;

viaje = viajando('Londres');
console.log(viaje);

viaje = viajando('París');
console.log(viaje);

const persona = {
  nombre: "César",
  edad: 21,
  anioNacimiento: () => new Date().getFullYear() - persona.edad
};

console.log(persona.anioNacimiento());

/*
function Tarea(nombre,urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}
*/

class Tarea {
  constructor(nombre,urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
  }
}

const tarea1 = new Tarea("Aprender Flutter", "Urgente");
const tarea2 = new Tarea("Aprender NodeJS", "Intermedia");

console.log(tarea1);
console.log(tarea2);


/* forEach  y map */

/* Scope - Alcance*/

var musica2 = "Rock";

if (musica2) {
  let musica2 = "Jazz"
  console.log(`Dentro del if ${musica2}`);
}
console.log(`El valor de la variable música fuera del if ${musica2}`);

const cliente = {
  nombreC: "Mariana",
  tipoC: "Premium",
  datos: {
    ubicacion: {
      ciudad: "México",
      pais: "México"
    },
    cuenta: {
      desde: "11-04-2020",
      saldo: 5020
    }
  },
  gustos: {
    deportes: ["Bicicleta", "Gym", "Baile"]
  }
};

let {nombreC, tipoC} = cliente;

console.log(nombreC);
console.log(tipoC);
console.log(cliente);