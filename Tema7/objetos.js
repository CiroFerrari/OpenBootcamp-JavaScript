let datosPersonales = {
  nombre: "Franco Ciro",
  apellido: "Ferrari",
  edad: 30,
  altura: 1.78,
  isDev: true
};

let edad = datosPersonales.edad;

let lista = [
  datosPersonales,
  {
    nombre: "Lucas",
    apellido: "Donello",
    edad: 29,
    altura: 1.78,
    isDev: false
  },
  {
    nombre: "Alejandro",
    apellido: "Artero",
    edad: 31,
    altura: 1.78,
    isDev: false
  }
];

let listaOrdenada = lista.sort((anterior, actual) => anterior.edad - actual.edad);

console.log(listaOrdenada);