let resultado = [1, 1];
let nombre = "Franco";

const fibonacci = (numero) => {
  if(numero == 1) {
    return [1]
  } else if(numero == 2){
    return [1, 1]
  } else {
    for( let i = 2 ; i < numero ; i ++ ){
      resultado[i] = resultado[i-2] + resultado[i-1];
    }
    return(resultado);
  }
}

console.log(fibonacci(6))