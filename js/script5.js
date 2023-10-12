let ano = 2015;
if ((ano % 100 != 0 && ano % 4 == 0) || ano % 400 == 0) {
  console.log("Ano bissexto");
} else {
  console.log("Não é bissexto");
}
