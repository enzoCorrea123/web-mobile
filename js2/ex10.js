function naoSei(numero1, numero2, numero3) {
  let arrayNumeros = [numero1, numero2, numero3];
  arrayNumeros.forEach((numero) => {
    console.log(numero) 
  });
  for (let i = 0; i < arrayNumeros.length; i++) {
    for (let j = 0; j < arrayNumeros.length; j++) {
      if (arrayNumeros[i] > arrayNumeros[j]) {
        auxiliar = arrayNumeros[i];
        arrayNumeros[i] = arrayNumeros[j];
        arrayNumeros[j] = auxiliar;
      }
    }
  }
  arrayNumeros.forEach((numero) => {
    console.log(numero) 
  });
}
naoSei(5,6,7);
