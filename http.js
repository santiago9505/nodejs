const http = require("http");

const router = (req, res) => {
  //
  console.log("nueva petición");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola que tal");
      res.end();
      break;

    default:
      res.write("Error 404: No sé lo que quieres");
  }

  // res.writeHead(201, { "Content-Type": "text/pain" });

  // //Respuesta al usuario
  // res.write("Hola, ya se usar HTTP de NodeJS");

  // res.end();
};

http.createServer(router).listen(3000);

console.log("Escuchando en el puerto 3000");
