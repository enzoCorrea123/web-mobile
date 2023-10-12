const contarVogais = (texto) => {
    const chars = texto.split('');
    const vogais = chars.filter((letra)=>{
        return letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" 
    })
    return vogais.length;
};

console.log(contarVogais("ai meu cuu"));