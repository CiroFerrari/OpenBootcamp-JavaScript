function verdadera() {
  return true;
}

function asincrona() {
  setTimeout(() => {
    console.log("Hola soy una promesa")
  }, 5000);
};

function* idPar() {
  let id = 0
  while(true) {
    yield id += 2
  }
}