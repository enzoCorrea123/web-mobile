const estudante = {
  nome: "Enzo",
  idade: 17,
  nota1: 7,
  nota2: 8,
  nota3: 9,
  media: () => {
    return (estudante.nota1 + estudante.nota2 + estudante.nota3) / 3;
  },
  situacao: ()=>{
    if(estudante.media()>=7){
        return "aprovado";
    }else{
        return "reprovado";
    }
  }
};

console.log("Estudante:",estudante.nome,"\nidade:",estudante.idade,"\nmédia atingida:",estudante.media(),"\nsituação:",estudante.situacao());
