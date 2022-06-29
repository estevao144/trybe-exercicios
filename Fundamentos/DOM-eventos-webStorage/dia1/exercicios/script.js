//         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
//  Crie uma função que mude a cor do quadrado vermelho para branco.
//  Crie uma função que corrija o texto da tag <h1>.

//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
//função 1
function paragrafo() {
  let paragrafo = document.getElementsByTagName("p")[1];
  paragrafo.innerHTML =
    "um pouco de mim? Ainda estou me achando e entendo o que é tudo isso.";
}
paragrafo();
//função 2
function colorFund() {
  let color = document.getElementsByClassName("main-content")[0];
  color.style.background = "rgb(76, 164, 109)";
}
colorFund();

//função 3
function colorCenter() {
  let corCenter = document.getElementsByClassName("center-content")[0];
  corCenter.style.background = "rgb(255, 255, 255)";
}
colorCenter();

//função 4
function corre() {
  let titulo = document.getElementsByClassName("title")[0];
  titulo.innerHTML = "Exercicio 5.1 JavaScript";
}
corre();

// função 5
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function contP() {

    const paragrafo = document.getElementsByTagName('p');
    
    for (const key of paragrafo) {
        
      key.innerHTML = key.innerHTML.toUpperCase();
    //  paragrafo1.push(document.getElementsByTagName('p')[index]);
    // paragrafo1.innerHTML = paragrafo.innerHTML.toUpperCase();
}}
contP();
