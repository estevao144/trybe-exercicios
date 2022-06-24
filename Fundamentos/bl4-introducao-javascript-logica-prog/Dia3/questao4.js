//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores,
// ou seja, é divisível por 1 e por ele mesmo. 
//Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.


let cont = [];

for (let index = 1; index < 51; index++) {
    cont.push(index);
}
let numPri = cont.length-1;

for(index=cont.length-1; index >=0; index--) {
    if (cont[index] % cont[index] == 1 && cont[index]/1 == cont[index] ){
       numPri = cont[index]; 
    }
}

console.log(numPri);



