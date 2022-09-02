

let hoy = new Date();

let nacimiento = new Date("June 13, 1991");

let masTarde = hoy > nacimiento;

let diaNacimiento = nacimiento.getDate();

let mesNacimiento = nacimiento.getMonth() + 1;

let añoNacimiento = nacimiento.getFullYear();

console.log(añoNacimiento);