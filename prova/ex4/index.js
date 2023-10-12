//a
let frutas = ["maçã","banana","laranja"];
console.log(frutas);
//b
frutas.push("manga");
frutas.push("abacaxi");
console.log(frutas);
//c
frutas.shift();
console.log(frutas);
//d
frutas.splice(1,0,"tangerina");
frutas.splice(1,0,"abacate");
console.log(frutas);
//e
frutas.pop();
frutas.unshift("abacaxi");
console.log(frutas);
//f
console.log(frutas.length);
//g
const tamanho = frutas.map((fruta)=>{
    return fruta.length;
});
console.log(tamanho);
//h
const maiores = tamanho.filter((numero)=>{
    return numero>5;
})
console.log(maiores)
//i
console.log(frutas);