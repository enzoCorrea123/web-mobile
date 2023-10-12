//a
let livro = {
    titulo: "O alquimista",
    autor: "Paulo Coelho",
    anoDePublicacao: 1988
}
//b
console.log(livro.titulo);
//c
livro.anoDePublicacao = 1992;
//d
livro['editora'] = "Rocco";
console.log(livro);
//e
livro['getDescricao'] = ()=>{
    return "O livro "+livro.titulo+" foi escrito por "+livro.autor+" e publicado em "+livro.anoDePublicacao;
}
console.log(livro.getDescricao());

