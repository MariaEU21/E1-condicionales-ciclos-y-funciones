//Función para determinar si un número es par o impar:

function esParOImpar(numero) {
    if (numero % 2 === 0) {
      console.log(`El número ${numero} es par.`);
    } else {
      console.log(`El número ${numero} es impar.`);
    }
  }

  
  //Función para determinar el número mayor entre dos números:

  function numeroMayor(num1, num2) {
    if (num1 > num2) {
      console.log(`El número ${num1} es mayor que ${num2}.`);
    } else if (num1 < num2) {
      console.log(`El número ${num2} es mayor que ${num1}.`);
    } else {
      console.log("Los números son iguales.");
    }
  }

  
  //Función para determinar si un número es múltiplo de 5:

  function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
      console.log(`El número ${numero} es múltiplo de 5.`);
    } else {
      console.log(`El número ${numero} no es múltiplo de 5.`);
    }
  }

  
  //Función para imprimir todos los números desde 0 hasta un número dado:

  function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }

  
  //Función para imprimir una palabra repetida un número determinado de veces:

  function imprimirPalabra(palabra, repeticiones) {
    for (let i = 0; i < repeticiones; i++) {
      console.log(palabra);
    }
  }

  
  //Función para imprimir todos los valores de un array:

  function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  
  //Función para imprimir todos los valores de un array, excepto el de la posición 5:

  function imprimirArraySinPosicion(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) { // La posición 5 corresponde al índice 4 en JavaScript
        console.log(array[i]);
      }
    }
  }
  
  //Función para imprimir cada número de un array multiplicado por un número dado:

  function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
      let resultado = array[i] * numero;
      console.log(resultado);
    }
  }

  
  //ejemplos de parámetros correspondientes para ver los resultados en la consola:

  
esParOImpar(7);
numeroMayor(10, 5);
esMultiploDeCinco(25);
imprimirNumerosHasta(5);
imprimirPalabra("Hola", 3);
imprimirArray([1, 2, 3, 4, 5]);
imprimirArraySinPosicion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
multiplicarArrayPorNumero([1, 2, 3, 4, 5], 2);