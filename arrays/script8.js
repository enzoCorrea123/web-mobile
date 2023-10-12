const contarNumeros = (numeros, numero) => {
    const contadorArray = numeros.filter((valor)=>{
        return valor==numero;
    })
    return contadorArray.length;
};

console.log(contarNumeros([1,1,2,2,2,3,3,3,3],3));