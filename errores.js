function seRompe() {
  return 3 + z;
}

try {
  seRompe();
} catch (err) {
  console.error("Se rompió perrito");
  console.error(err.message + " mi so");
}

console.log("Esto se ejecuta");
