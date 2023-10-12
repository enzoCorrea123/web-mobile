function juntarArrays(vetor1, vetor2) {
    let vetor3 = [];
  for (let i = 0; i < vetor1.length + vetor2.length; i++) {
        vetor3 = vetor1 + " - " + vetor2;
  }
  return vetor3;
}
const vetor1 = [1, 2, 3, 4, 5, 6];
const vetor2 = ["carro", "moto", "caminhão", "navio", "avião", "bicicleta"];
console.log(juntarArrays(vetor1, vetor2))

