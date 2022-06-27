//questão 1

function checkPalindromo(palavra) {
  let direita = [];
  for (let index = 0; index < palavra.length / 2; index++) {
    if (palavra[index] != palavra[palavra.length - index - 1]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(checkPalindromo("arara"));

//questao 2

function inMaior(numeros) {
  let inMaior = 0;
  for (const key in numeros) {
    if (numeros[inMaior] < numeros[key]) {
      inMaior = key;
    }
  }
  return inMaior;
}

console.log(inMaior([2, 3, 6, 7, 10, 1]));

// Questão 3

function inMenor(numeros1) {
  let inMenor = numeros1[0];

  for (const key in numeros1) {
    if (numeros1[inMenor] > numeros1[key]) {
      inMenor = key;
    }
  }
  return inMenor;
}

console.log(inMenor([2, 4, 6, 7, 10, 0, -3]));

//Questao 4

function nomeMaior(nome) {
  let nomeGrande = "";

  for (const index in nome) {
    if (nomeGrande.length < nome[index].length) {
      nomeGrande = nome[index];
    }
  }
  return (nomeGrande);
}

console.log(
  nomeMaior(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);

//questão 5