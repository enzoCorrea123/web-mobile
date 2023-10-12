function gerarNumeroAleatorio(minimo,maximo){
    return Math.floor(Math.random() * maximo) + minimo;
}
console.log(gerarNumeroAleatorio(5,15));