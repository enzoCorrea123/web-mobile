const filtrarNumeros = (numeros, numero) => {
    const novoArray = numeros.filter((valor)=>{
        return valor>numero;
    })
    return novoArray;
};

console.log(filtrarNumeros([1,2,3,4,5,6,7,8,9],5));
