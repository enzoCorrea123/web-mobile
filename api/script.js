// fetch('http://api.weatherapi.com/v1/current.json?key=7ce5a12fad9449c589f01524230407&q=Joinville').then(
//     response=>response.json()).then(data=>{
//         console.log('Condições climáticas:');
//         console.log('Temperatura: '+data.current.temp_c+' graus Celsius');
//         console.log('Condição: '+data.current.condition.text);
//     }).catch(error=> console.log('Erro: ',error));


// const consultaCEP = fetch('https://viacep.com.br/ws/89253520/json/').then(
//     response => response.json()).then(r => {
//         if(r.erro){
//             throw Error('Esse CEP não existe');
//             console.log(r)
//         }else{
//             console.log(r)
//         }}).catch(error => console.log(error)).finally(mensagem => console.log('processamento concluído'));

// console.log(consultaCEP);

async function buscaEndereco(cep){
    try{
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existe');
        }else{
            console.log(consultaCEPConvertida);
        }
        const cidade = document.getElementById('cidade');
        const logradouro = document.getElementById('endereco');
        const bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        bairro.value = consultaCEPConvertida.bairro;

        
    }catch(e){
        console.log('deu erro '+e);
    }
    
}
const cep = document.getElementById('cep');
cep.addEventListener('focusout',()=>{
    buscaEndereco(cep.value);
})
