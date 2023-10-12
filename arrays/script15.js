let frutas = ["maçã","banana","laranja"];
console.log(frutas[1]);
frutas.push("manga");
frutas.shift()
console.log(frutas.length);
frutas.forEach((frutinha)=>{
    console.log(frutinha)
})
let tamanhoFrutas = frutas.map((frutinha)=>{
    return frutinha.length;
})
tamanhoFrutas.forEach((frutinha)=>{
    console.log(frutinha)
})
let frutasGrandes = frutas.filter((frutinha)=>{
    return frutinha.length>5;
})
frutasGrandes.forEach((frutinha)=>{
    console.log(frutinha)
})
const soma = tamanhoFrutas.reduce((acumulador,numero)=>{
    return acumulador + numero
})
console.log(soma)