const conta = {
    saldo: 2500,
    titular: "Enzo",
    depositar: (dinheiro)=>{
        conta.saldo += dinheiro
    },
    sacar: (dinheiro)=>{
        conta.saldo -= dinheiro
    },
    verSaldo: ()=>{
        console.log(conta.saldo)
    }
}
conta.depositar(100);
console.log(conta.verSaldo())
conta.sacar(300)
console.log(conta.verSaldo())