const paleta = document.getElementById("pixel-board");
const pixels = document.getElementsByClassName("pixel");
const botaoQuadrado = document.getElementById("generate-board");

function botaoQ(num) {
  for (let index = 0; index < num; index++) {
    let linha = document.createElement("div");
    linha.className = "linha";
    for (let index = 1; index <= num; index++) {
      let quadradoP = document.createElement("div");
      quadradoP.className = "pixel";
      linha.appendChild(quadradoP);
    }
    paleta.appendChild(linha);
  }
}
// botaoQuadrado.addEventListener("click", botaoQ);

botaoQ(5);


