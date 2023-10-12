function montante(capital,juros,meses){
    return capital * (1+juros) * meses
}console.log(montante(1500,0.1,12))