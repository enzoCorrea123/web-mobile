function verificarString(texto) {
  let vetorTexto = texto.split("");
  let letraRepetida = "";
  let quantidadeLetraRepetida=0;
  for (let i = 0; i < vetorTexto.length; i++) {
    for (let k = i; k < vetorTexto.length; k++) {
        if(vetorTexto[i] == vetorTexto[k]){
            letraRepetida = vetorTexto[i];
            quantidadeLetraRepetida++;
        }
    }
    if(quantidadeLetraRepetida>1){
        console.log("Letra repetida: ",letraRepetida," quantidade de vezes: ",quantidadeLetraRepetida);
    }
    quantidadeLetraRepetida=0
  }
}
verificarString("programação web mobile");
