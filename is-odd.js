const isOdd = require("is-odd");
let number = "hola";

try {
  isOdd(number);
} catch (err) {
  console.error("Se rompió perrito");
}

console.log("Igual me ejecuté");
