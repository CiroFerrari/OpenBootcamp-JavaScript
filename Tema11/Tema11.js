class Estudiante {
  // #nombre es variable privada (acceso sólo desde esta clase)
  #nombre;
  constructor(nombre) {
    this.#nombre = nombre
  }
  //_asignaturas es variable protegida (acceso desde esta clase y sus descendientes)
  _asignaturas = ["HTML", "CSS", "Javascript"];
  obtenDatos() {
    return {
      nombre: this.#nombre,
      asignaturas: this._asignaturas
    }
  };
};

let estudiante = new Estudiante("Carlos");

estudiante.obtenDatos();