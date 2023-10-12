function fibonacci(){
    let auxiliar1=0;
    let auxiliar2=1;
    let numero = 0;
    console.log(auxiliar1)
    console.log(auxiliar2)
    
    for(let i = 2;i<100;i++){
        numero = auxiliar1 + auxiliar2;
        if(numero>50000){
            break;
        }
        console.log(numero);
        auxiliar1 = auxiliar2;
        auxiliar2 = numero;
    }
    
}

fibonacci()