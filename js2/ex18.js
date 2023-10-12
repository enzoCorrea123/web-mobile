let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros.join());
console.log(numeros.reverse(0, 1));
let novoArray = numeros.slice(3);
console.log(novoArray);
let nomes = ["carlos", "abraao", "kaue", "enzo"];
console.log(nomes.sort());
const pares = numeros.filter((numero) => {
  return numero % 2 == 0;
});
console.log(pares);

const quadrados = numeros.map((numero) => {
  return numero * numero;
});
console.log(quadrados);

const soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
});
console.log(soma)
nomes.forEach((nome)=>{
    console.log(nome);
})