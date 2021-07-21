const hola = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
    }, 1500);
  });
};

const hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla");
      resolve(nombre);
    }, 1000);
  });
};

const adios = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios", nombre);
      resolve(nombre);
    }, 1000);
  });
};

console.log("Iniciando el proceso...");

hola("Santiago")
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminado el proceso");
  })
  .catch((error) => {
    console.error("Ha habido un error");
    console.error(error);
  });
