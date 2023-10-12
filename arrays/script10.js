const criarArray = (numero) => {
  const vetor = [];
  for (let i = 0; i < numero; i++) {
    vetor.push(i);
  }
  return vetor;
};

console.log(criarArray(8));
