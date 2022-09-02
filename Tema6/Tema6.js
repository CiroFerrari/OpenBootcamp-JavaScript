let listaDeCompras = ["yogurt", "cereales", "café", "azúcar", "agua"];

listaDeCompras.push("Aceite de Girasol");

listaDeCompras.pop();

let peliculasFavoritas = [
  {
    titulo: "Rocky",
    director: "John G. Avildsen",
    fecha: 1977
  },
  {
    titulo: "Jason Bourne",
    director: "Doug Liman",
    fecha: 2002
  },
  {
    titulo: "Star Wars",
    director: "George Lucas",
    fecha: 1999
  }
]

let nuevaLista = peliculasFavoritas.filter(item => item.fecha > 2000);

let listaDirectores = peliculasFavoritas.map ( item => item.director);

let listaTitulos = peliculasFavoritas.map ( item => item.titulo);

let listaConcat = listaDirectores.concat(listaTitulos);

let listaPropagacion = [...listaDirectores, ...listaTitulos];