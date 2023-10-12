function emprestimo(salario,prestacao){
    if(prestacao > salario*0.20){
        console.log("empréstimo não pode ser concedido")
    }else{
        console.log("empréstimo pode se concedido")
    }
}
emprestimo(2000,259)