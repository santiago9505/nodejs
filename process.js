// const process = require("process");

process.on("beforeExit", () => {
  console.log("El proceso está por terminar");
});

process.on("exit", () => {
  console.log("El proceso acabó");
});

process.on("uncaughtException", (err, origen) => {
  console.error("Se nos olvido capturar el error");
  console.log(err);
});

noExiste();

console.log("No sale si el error no se recoge");
