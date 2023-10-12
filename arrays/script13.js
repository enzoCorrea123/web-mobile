function diferencaEmDias() {
    let dataInicial = new Date("2019-09-13");
    let dataFinal = new Date("2022-05-06");

    let diferencaEmMilissegundos = dataFinal.getTime() - dataInicial.getTime();

    let diferencaEmDias = Math.round(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    return diferencaEmDias;
}
console.log(diferencaEmDias())