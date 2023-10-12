let nota1 = 6,
  nota2 = 8,
  nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;

console.log(media);
if (media < 5) {
  console.log("reprovado");
} else if (media < 6.9) {
  console.log("exame");
} else {
  console.log("aprovado");
}
