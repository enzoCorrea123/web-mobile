const fs = require('fs');
//nome, formatação, tratamento de erros(erro e dados do arquivo)
fs.readFile('exemplo.txt', 'utf8', function(err,data){
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

console.log('final do código')

const matematica = require('./matematica');
console.log(matematica.operacoes.somar(2,3));