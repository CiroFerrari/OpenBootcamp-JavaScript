let nombre = "Franco Ciro"
let apellido = "Ferrari"

let persona = {
  nombre,
  apellido
}

localStorage.setItem("persona", JSON.stringify({ nombre, apellido }))

console.log(JSON.parse(localStorage.getItem("persona")))

sessionStorage.setItem("persona", JSON.stringify({ nombre, apellido }))

document.cookie = JSON.stringify({ nombre, apellido })