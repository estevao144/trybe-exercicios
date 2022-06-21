let peca = 'rainha';
let resultado = peca.toLowerCase();

if (peca == 'peao') {
    console.log('anda duas ou uma casa a frente.')
    
} else if (peca == 'torre') {
    console.log('anda de forma horizontal')
        
} else if (peca == 'bispo') {
    console.log('anda de forma diagonal')

} else if (peca == 'rainha') {
    console.log('anda de forma vertical, diagonal e horizontal')

} else if (peca == 'rei') {
    console.log('anda de forma horizontal e vertical, mas somente 2 casas')

} else if (peca == 'cavalo') {
    console.log('anda em forma de L')

} else{
    console.log('peça não reconhecida.')
}
    
