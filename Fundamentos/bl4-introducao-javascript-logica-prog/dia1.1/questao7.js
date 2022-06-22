
const porcentagem = 60;

if (porcentagem > 100 || porcentagem < 0) {
    console.log('valor invalido')
}else if (porcentagem >= 90) {
    console.log('A');
} else if(porcentagem>=80){
    console.log('B');
} else if(porcentagem>=70){
    console.log('C');
} else if(porcentagem>=60){
    console.log('D');
} else if(porcentagem>=50){
        console.log('E');
} else if(porcentagem<50){
    console.log('F');
}


//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F

 