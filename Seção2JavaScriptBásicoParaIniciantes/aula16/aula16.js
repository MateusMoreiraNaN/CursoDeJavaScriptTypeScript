function saudacao(nome){
    //console.log(`Bom dia ${nome}`);
    return `Bom dia ${nome}`
}

saudacao('Luiz')
saudacao('Mateus')
saudacao('Fulano')

const variavel = saudacao('Mateus')
console.log(variavel);

function soma(x, y){
    const res = x + y
    return res
}

console.log(soma(2,2));
console.log(soma(10,10));
console.log(soma(100, 100));

const raiz = (n)=>{
    return n ** 0.5
}

console.log(Math.round(raiz(5)));