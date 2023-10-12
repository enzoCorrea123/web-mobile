const pergunta = document.getElementById("pergunta");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const pScore = document.getElementById('score');

const orders = [0,1,2,3];
btn1.style.order = orders[0];
btn2.style.order = orders[1];
btn3.style.order = orders[2];
btn4.style.order = orders[3];

const quests = ["Quem era o professor que falava: '0,5 o que? bananas??'","Qual é o nome do motorista parceiro do Pedrão?",
  "Quem discorda de tudo?", "é um mecanismo da Orientação a Objeto que permite criar novas classes a partir de classes já existentes, aproveitando-se das características existentes na classe a ser estendida.", "Quantas vezes o Kevin caiu de bike?", 
  "Quem é o autor de: 'cadê a maçaneta?'", "Como alinhar uma div completamente no centro?", 
  "Qual a principal diferença de forEach e map no javascript?", "Quantas galinhas o Roberto comprou?", 
  "Em qual aula surgiu a kavicenga?"];

  const opcoes = {
    pergunta1: ["Rodrigo Ribeiro","Rodrigo Willemann", "Roberto Baumgartel", "Kristian Erdmann"],
    pergunta2: ["Gerson","Maicon","Paulo","Geison"],
    pergunta3: ["João Winter","Johnathan Hilario", "Carlos Bolzanell","Mathias Coletta"],
    pergunta4: ["herança","Classe", "Polimorfismo","Encapsulamento"],
    pergunta5: ["4","5","3","8"],
    pergunta6: ["Mathias","Kaue Andrade","Enzo","Kevin"],
    pergunta7: ["display: flex; justify-content: center, align-itens: center, min-height: 100vh","display: inline-flex; justify-content: space-around; font-weight: 10px; align-itens: center",
    "display: flex; justify-content: center; align-itens: center; max-width: 50%", "justify-content: center; align-itens: center; min-height: 100vh, display: flex"],
    pergunta8: ["forEach percorre o array e faz as alterações nele mesmo, enquanto o map cria um novo array através do processamento dele mesmo", "não há diferença",
    "forEach adiciona um elemento no final do array, enquanto map remove um elemento no final do array",
    "forEach permite adicionar ou remover elementos em qualquer posição do array, enquanto map percorre um array e filtra os elementos com base em uma condição definida pela função passada como argumento. "],
    pergunta9: ["0","20","14","16"],
    pergunta10: ["Introdução a Industria 4.0","fundamentos da matemática", "programação web mobile", "fundamentos da eletricidade"]
  }

  let pontos = 0;
  let contador = 0;
  const arrayNomes = [];
  const arrayPontos = [];
const main = ()=>{
  if(contador == 10){
    arrayNomes.push(localStorage.getItem('nome'));
    arrayPontos.push(pontos);

    localStorage.removeItem('nome');
    localStorage.setItem('nomes',arrayNomes);
    localStorage.setItem('pontos',arrayPontos);

    pergunta.innerHTML = "Acabou o quiz!";
    pScore.innerHTML = `Sua pontuação é ${pontos}`;
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn1.innerHTML = "Jogar novamente";
    btn2.innerHTML = "Ver ranking";
  }else{
    pergunta.innerHTML = quests[contador];
    adicionarOpcoes();
    
  }
  
  btn1.style.backgroundColor = "black";
  btn2.style.backgroundColor = "black";
  btn3.style.backgroundColor = "black";
  btn4.style.backgroundColor = "black";

  btn1.style.order = orders[Math.floor((Math.random() * orders.length))];
  btn2.style.order = orders[Math.floor((Math.random() * orders.length))];
  btn3.style.order = orders[Math.floor((Math.random() * orders.length))];
  btn4.style.order = orders[Math.floor((Math.random() * orders.length))];

  console.log("Contador ",contador);
  console.log("Pontos ",pontos);
  
  function acertou(){
    btn1.style.backgroundColor = "green";
    btn1.style.color = "white";
    contador++;
    pontos++;
    removerEventListener();
    setTimeout(()=>{
      main();
    },200)
    
  }

  function errou(btn){
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    contador++;
    removerEventListener();
    setTimeout(()=>{
      main();
    },200)
  }

  function removerEventListener(){
    btn1.removeEventListener('click', acertou, false);
    btn2.removeEventListener('click', errou, false);
    btn3.removeEventListener('click', errou, false);
    btn4.removeEventListener('click', errou, false);
  }

  btn1.addEventListener('click', acertou);

  btn2.addEventListener('click',()=>{
    errou(btn2)
  });

  btn3.addEventListener('click', ()=>{
    errou(btn3)
  });

  btn4.addEventListener('click',()=>{
    errou(btn4)
  });

    
  }

function adicionarOpcoes(){
  console.log("entrou")
  switch(contador){
    case 0:
      console.log("entrou 0")
      btn1.innerHTML = opcoes.pergunta1[0];
      btn2.innerHTML = opcoes.pergunta1[1];
      btn3.innerHTML = opcoes.pergunta1[2];
      btn4.innerHTML = opcoes.pergunta1[3];
      break;

    case 1:
      console.log("entrou 1")
      btn1.innerHTML = opcoes.pergunta2[0];
      btn2.innerHTML = opcoes.pergunta2[1];
      btn3.innerHTML = opcoes.pergunta2[2];
      btn4.innerHTML = opcoes.pergunta2[3];
      break;
    case 2:
      console.log("entrou 2")
      btn1.innerHTML = opcoes.pergunta3[0];
      btn2.innerHTML = opcoes.pergunta3[1];
      btn3.innerHTML = opcoes.pergunta3[2];
      btn4.innerHTML = opcoes.pergunta3[3];
      break;
    case 3:
      btn1.innerHTML = opcoes.pergunta4[0];
      btn2.innerHTML = opcoes.pergunta4[1];
      btn3.innerHTML = opcoes.pergunta4[2];
      btn4.innerHTML = opcoes.pergunta4[3];  
      break;
    case 4:
      btn1.innerHTML = opcoes.pergunta5[0];
      btn2.innerHTML = opcoes.pergunta5[1];
      btn3.innerHTML = opcoes.pergunta5[2];
      btn4.innerHTML = opcoes.pergunta5[3];
      break;
    case 5:
      btn1.innerHTML = opcoes.pergunta6[0];
      btn2.innerHTML = opcoes.pergunta6[1];
      btn3.innerHTML = opcoes.pergunta6[2];
      btn4.innerHTML = opcoes.pergunta6[3];
      break;
    case 6:
      btn1.innerHTML = opcoes.pergunta7[0];
      btn2.innerHTML = opcoes.pergunta7[1];
      btn3.innerHTML = opcoes.pergunta7[2];
      btn4.innerHTML = opcoes.pergunta7[3];
    break;
    case 7:
      btn1.innerHTML = opcoes.pergunta8[0];
      btn2.innerHTML = opcoes.pergunta8[1];
      btn3.innerHTML = opcoes.pergunta8[2];
      btn4.innerHTML = opcoes.pergunta8[3];
      break;
    case 8:
      btn1.innerHTML = opcoes.pergunta9[0];
      btn2.innerHTML = opcoes.pergunta9[1];
      btn3.innerHTML = opcoes.pergunta9[2];
      btn4.innerHTML = opcoes.pergunta9[3];
      break;
    case 9:
      btn1.innerHTML = opcoes.pergunta10[0];
      btn2.innerHTML = opcoes.pergunta10[1];
      btn3.innerHTML = opcoes.pergunta10[2];
      btn4.innerHTML = opcoes.pergunta10[3];
      break;  
  }
}
main();