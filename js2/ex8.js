function eleitor(idade){
    if(idade<16){
        console.log("Não eleitor")
    }else if(idade<18 || idade>65){
        console.log("Eleitor não obrigatório")
    }else{
        console.log("Eleitor obrigatório")
    }
}
eleitor(44)