//Saber que fue en un lugar
console.info("Algo");

//Saber un error
console.error("error");

//Algo importante de  peligro
console.warn("Puede ser un error");

let tabla = [
  {
    a: 1,
    b: 2,
  },
  {
    a: 3,
    b: 4,
  },
];

//Tablas
console.table(tabla);

//Agrupar
console.group("Empieza");
console.log("Hola");
console.log("Cómo estás?");
console.groupEnd();

console.log("otra cosa");

console.count("veces");
console.count("veces");
console.count("veces");
