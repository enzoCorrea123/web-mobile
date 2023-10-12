const table = document.getElementById("table");
// const arrayNomes = JSON.parse(localStorage.getItem('nomes'));
const arrayNomes = localStorage.getItem('nomes')
const arrayPontos = JSON.parse(localStorage.getItem('pontos'));
console.log(arrayNomes)
for(let i=0;i<arrayNomes.length;i++){
    let tr = document.createElement('tr');
    let tdNome = document.createElement('td');
    let tdPontos = document.createElement('td');

    tdNome.innerHTML = arrayNomes[i];
    tdPontos.innerHTML = arrayPontos[i];

    tr.appendChild(tdNome);
    tr.appendChild(tdPontos);
    table.appendChild(tr);
}