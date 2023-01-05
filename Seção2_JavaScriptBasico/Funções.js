function saudacao(nome){
    console.log(`Bom dia ${nome}!`);
    return nome
    return `Bom dia ${nome}!`
    console.log('Ola mundo!');
}



saudacao('Luiz')
const variavel = saudacao('MaTeus')
console.log(variavel);
saudacao('Teste')
saudacao('Felipe')

function soma(x, y){
    const resul = x + y
    return resul
}

const resul = soma(4,5)
console.log(resul);

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(20, 5));

function teste(x = 1, y = 5){
    const resultado = x + y
    return resultado
}

console.log(teste());

const raiz = (n) => {
    return n ** 0.5
}

console.log(raiz(9));
console.log(raiz(15));
console.log(raiz(34));
console.log(raiz(19));