let array = ["java", "javascript", "python", "html", "css"];

let tamanhoPal = [];


for (let index = 0; index < array.length; index++) {
  tamanhoPal.push(array[index].length);
}

let menor = tamanhoPal[0];
let maior = tamanhoPal[0];

for (let index = 0; index < tamanhoPal.length; index++) {
  if (maior <= tamanhoPal[index]) {
    maior = tamanhoPal[index];
  }
  if (menor >= tamanhoPal[index]) {
    menor = tamanhoPal[index];
  }
}
console.log("array tamanhoPal", tamanhoPal);
console.log("maior numero é: ", maior, "e o menor numero é:", menor);
