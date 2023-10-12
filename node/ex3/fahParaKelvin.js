function converter(grau){
    return (grau - 32) * (5/9) + 273.15;
}
module.exports.converterFah = converter;