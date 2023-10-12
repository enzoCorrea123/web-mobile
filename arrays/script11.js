const carro = {
    marca: "fiat",
    modelo: "uno",
    anoInicial: 2012,
    anoAtual: 0,
    getIdade: ()=>{
        return carro.anoAtual - carro.anoInicial;
    },
    getDescricao: ()=>{
        return "Marca: "+carro.marca+"\nModelo: "+carro.modelo+"\nAno inicial: "+carro.anoInicial+"\nAno atual: "+carro.anoAtual+"\nDiferença da idade: "+carro.getIdade();
    }
}
console.log(carro.marca)
carro.anoAtual = 2025;
console.log(carro.getIdade());
console.log(carro.getDescricao());
