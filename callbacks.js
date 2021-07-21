const hola = (nombre, miCallback) => {
  setTimeout(function () {
    console.log(`Hola, ${nombre}`);
    miCallback(nombre);
  }, 1500);
};

const adios = (nombre, otroCallback) => {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
};

console.log("iniciando proceso...");
hola("Santiago", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando proceso");
  });
});
// hola("Santiago", function () {});
// adios("Santiago", function () {});
