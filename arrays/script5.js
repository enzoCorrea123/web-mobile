const calculaMedia = () =>{
    let notas = [7,8,4,9,6];
    let soma = notas.reduce((acumulador,numeros)=>{
        console.log("Acumulador: ",acumulador)
        console.log("numeros: ",numeros);
        return acumulador + numeros;
    },0);
    return soma / 5;
}
console.log(calculaMedia());