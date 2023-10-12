const digitos = 6;
function gerarSenha(digitos){
    let senha = ""
    for(let i=0;i<digitos;i++){
        senha = senha + Math.floor(Math.random() * 9);
    }
    return senha;
}
console.log(gerarSenha(digitos));