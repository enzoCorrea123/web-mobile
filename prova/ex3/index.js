function numeroPrimo(numero) {
    if (numero <= 1) {
        return false;
      }

  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

function imprimir() {
  for (let i = 0; i < 100; i++) {
    if (numeroPrimo(i)) {
      console.log(i);
    }
  }
}
imprimir();
