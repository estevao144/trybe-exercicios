const a = 3;
const b = 2;
let operador = '*';

switch (operador){
    case '+':
        console.log(a+b);
    break;

    case '-':
        console.log(a-b);
     break;

     case '/':
     console.log(a/b);
     break;
     
     case '*':
     console.log(a*b);
     break;

     default:
        console.log('valor nao identificado')
    break;
}

