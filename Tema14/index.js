let boton = document.getElementById('click-btn');

boton.addEventListener('click', () => {
  alert('click en el botón')
})

$('#jquery-btn').click(() => {
  console.log('Hola, estoy utilizando jQuery')
})