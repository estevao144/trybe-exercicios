const lado1 = 65;
const lado2 = -100;
const lado3 = 1;

let somaDosLados = lado1 + lado2 + lado3;

let ladosPositivos = lado1 > 0 && lado2> 0 && lado3 > 0;

if (ladosPositivos){
    if (somaDosLados === 180) {
        console.log(true);
    } else {
    console.log(false);
    
            }
}else{
    console.log("Erro: angulo invalido")
}