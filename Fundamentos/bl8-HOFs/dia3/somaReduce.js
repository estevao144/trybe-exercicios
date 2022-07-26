const numeros = [2, 5, 9, 15, 89, 0, 13, 3, 110];

const somaReduce = numeros.reduce((acc, cur) => {
    
    return  acc + cur;
    
    });

    console.log(`O valor total foi de: ${somaReduce}.`);