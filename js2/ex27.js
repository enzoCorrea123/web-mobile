function criarMatriz(linha, coluna) {
  let linhas = "";
  for (let i = 0; i < linha; i++) {
    for (let j = 0; j < coluna; j++) {
      linhas = linhas + " " + Math.floor(Math.random() * 10)+ " ";
    }
    console.log("|" + linhas + "|");
    linhas = "";
  }
}
criarMatriz(4, 6);
