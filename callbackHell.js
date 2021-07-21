const hola = (nombre, miCallback) => {
  setTimeout(function () {
    console.log(`Hola, ${nombre}`);
    miCallback(nombre);
  }, 1500);
};

const hablar = (callbackHablar) => {
  setTimeout(() => {
    console.log("bla bla bla");
    callbackHablar();
  }, 1000);
};

const conversación = (nombre, number, callback) => {
  if (number > 0) {
    hablar(() => {
      conversación(nombre, --number, callback);
    });
  } else {
    adios(nombre, callback);
  }
};

const adios = (nombre, otroCallback) => {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
};

console.log("Iniciando proceso");
hola("Santiago", (nombre) => {
  conversación(nombre, 3, () => {
    console.log("Proceso Terminado");
  });
});

// console.log("iniciando proceso...");
// hola("Santiago", function (nombre) {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, function () {
//           console.log("Terminando proceso");
//         });
//       });
//     });
//   });
// });
