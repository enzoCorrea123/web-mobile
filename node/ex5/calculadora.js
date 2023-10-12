function calcular(operacao) {
    if (parseInt(operacao.indexOf('-'))>0) {
        const str = operacao.split("-");
        return parseFloat(str[0]) - parseFloat(str[1]);
    
      } else if (parseInt(operacao.indexOf('+'))>0) {
        const str = operacao.split("+");
        return parseFloat(str[0]) + parseFloat(str[1]);
    
      } else if (parseInt(operacao.indexOf('*'))>0) {
        const str = operacao.split("*");
        return parseFloat(str[0]) * parseFloat(str[1]);
    
      } else if (parseInt(operacao.indexOf('/'))>0) {
        const str = operacao.split("/");
        return parseFloat(str[0]) / parseFloat(str[1]);
    
      }
}
module.exports.calcular = calcular;
