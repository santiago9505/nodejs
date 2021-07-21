const { exec, spawn } = require("child_process");

// exec("node console.js", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

//Nuevamente me permite acceder a cada uno de los archivos
proceso.stdout.on("data", function (dato) {
  console.log(proceso.killed);
  console.log(dato.toString());
});

//Podemos detectar cuando se termina el proceso
proceso.on("exit", function () {
  console.log("El proceso terminó");
  console.log(proceso.killed);
});
