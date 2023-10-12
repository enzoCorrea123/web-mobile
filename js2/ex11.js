let numeros = [4, 9, 1, 2, 5, 3];
function crescente(numeros) {
  let auxiliar = 0;
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
      if (numeros[i] < numeros[j]) {
        auxiliar = numeros[i];
        numeros[i] = numeros[j];
        numeros[j] = auxiliar;
      }
    }
  }
  numeros.forEach((element) => {
    console.log(element);
  });
}
crescente(numeros);