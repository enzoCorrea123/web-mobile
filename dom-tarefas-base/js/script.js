let campoTarefa = document.querySelector("#campo-tarefa");
let botaoIniciar = document.querySelector("#botao-adicionar");
let listaTarefa = document.querySelector("#lista-tarefas");
let tema = document.querySelector("#alternar-tema");
let arrayTarefas = [];
let cont = 0;
window.onload = ()=>{
  document.body.className = localStorage.getItem("modo")
  arrayTarefas = JSON.parse(localStorage.getItem("tarefas"));
    if(arrayTarefas != null){
      arrayTarefas.forEach(element => {
      let novaTarefa = document.createElement("li");
      novaTarefa.innerText = element;
      novaTarefa.className = "tarefa";
      listaTarefa.appendChild(novaTarefa);

      let botaoExcluir = document.createElement("button");
  botaoExcluir.innerText = "Remover";
  listaTarefa.appendChild(novaTarefa);
  novaTarefa.appendChild(botaoExcluir);

  botaoExcluir.addEventListener("click", () => {
    listaTarefa.removeChild(novaTarefa);
    arrayTarefas.splice(0,arrayTarefas.length);

    for(let i = 0;i<document.getElementsByClassName("tarefa").length;i++){
      arrayTarefas.push(document.getElementsByClassName("tarefa")[i].textContent);
      arrayTarefas[i] = arrayTarefas[i].splice("Remover")[0];
    };
    localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));
  });

  botaoExcluir.className = "botao-excluir";
      
    });
  }
 
}
botaoIniciar.addEventListener("click", () => {
  let nomeTarefa = campoTarefa.value;
  let novaTarefa = document.createElement("li");

  novaTarefa.innerText = nomeTarefa;
  arrayTarefas.push(novaTarefa.textContent);

  localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));
  novaTarefa.className = "tarefa";

  cont++;
  listaTarefa.appendChild(novaTarefa);
  campoTarefa.value = "";

  novaTarefa.addEventListener("click", () => {
    novaTarefa.classList.toggle("concluida");
  });

  let botaoExcluir = document.createElement("button");
  botaoExcluir.innerText = "Remover";
  listaTarefa.appendChild(novaTarefa);
  novaTarefa.appendChild(botaoExcluir);

  botaoExcluir.addEventListener("click", () => {
    listaTarefa.removeChild(novaTarefa);
    arrayTarefas.splice(0,arrayTarefas.length);

    for(let i = 0;i<document.getElementsByClassName("tarefa").length;i++){
      arrayTarefas.push(document.getElementsByClassName("tarefa")[i].textContent);
    };
    localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));
  });

  botaoExcluir.className = "botao-excluir";
});
tema.addEventListener("click", () => {
  theme();
});
function theme() {
  document.body.className = localStorage.getItem("modo") || "modo-claro";

  if (document.body.className === "modo-claro") {
    document.body.className = "modo-escuro";
  } else {
    document.body.className = "modo-claro";
  }
  localStorage.setItem("modo", document.body.className);
  console.log(listaTarefa);
}


// let listaCompras = document.getElementById('lista-compras');
// let botaoAdicionar = document.getElementById('adicionar-btn');
// let inputItem = document.getElementById('item-input');

// let itensSalvos = JSON.parse(localStorage.getItem('itens')) || [];
// itensSalvos.forEach(adicionarItemNaLista)
// botaoAdicionar.addEventListener('click',()=>{
//     let nomeItem = inputItem.value;
//     adicionarItemNaLista(nomeItem);

//     itensSalvos.push(nomeItem);
//     localStorage.setItem('itens',JSON.stringify(itensSalvos))
//     inputItem.value = '';
// });
// const adicionarItemNaLista = (nomeItem)=>{
//     let itemLista = document.createElement('li');
//     itemLista.innerText = nomeItem;
//     listaCompras.appendChild(itemLista);
// }
