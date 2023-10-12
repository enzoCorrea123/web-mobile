function contarCaractere(texto){
    let contador=0
    let maior=0
    let letra
    for(let i=0;i<texto.length;i++){
        for(let j=0;j<texto.length;j++){
            if(texto.charAt(i) == texto.charAt(j)){
                contador++;
            }
        }
        if(contador>maior){
            maior = contador
            letra = texto.charAt(i)
            contador = 0
        }
    }
    return letra
}
console.log(contarCaractere("olaa"));