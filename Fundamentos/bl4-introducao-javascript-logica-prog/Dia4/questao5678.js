//Questão 6: Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos,
//e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
  ]
 
};


console.log('O livro favorito de ', leitor.nome,' ',leitor.sobrenome, ' se chama ',leitor.livrosFavoritos[0].titulo );
    
    
//questão 7 : Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:


leitor.livrosFavoritos.push([{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}]) 

console.log(leitor.livrosFavoritos[1]);

//questão 8: - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

let fav = 0;

for (const key in leitor.livrosFavoritos) {
  
  fav = key;
    
    
  }

  console.log(leitor.nome,' tem ', fav, 'livros favoritos');