let frutas = ["maçã", "banana", "laranja"];
console.log(frutas);
console.log(frutas[1]);
frutas.push("morango");
console.log(frutas);
frutas.shift();
console.log(frutas);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros.push(10);
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.unshift(1938749127);
console.log(numeros);
numeros.shift();
console.log(numeros);

let frutas2 = ["manga", "abacaxi", "melancia"];
let todasFrutas = frutas.concat(frutas2);
console.log(todasFrutas);

todasFrutas.splice(1, 2);
console.log(todasFrutas);
console.log(todasFrutas.indexOf("banana"));
const frutasM = todasFrutas.filter((fruta) => {
  return fruta.charAt(0) == "m";
});
console.log(frutasM);
const quadrados = numeros.map((numero) => {
  return numero * numero;
});
console.log(quadrados);

todasFrutas.forEach((fruta)=>{
    console.log(fruta);
})
