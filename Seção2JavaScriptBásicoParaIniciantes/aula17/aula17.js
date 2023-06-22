const array = [1,2,3]

console.log(array);
array.push(4)
array[0] = 'Luiz'
console.log(array);
/*
const pessoa1 = {
    nome: 'Mateus',
    sobrenome: 'Moreira',
    idade: 25
}

const pessoa2 = {
    nome: 'Julia',
    sobrenome: 'Moreira',
    idade: 120
}
*/
const criaPessoa =(nome, sobrenome, idade)=>{
    return{
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criaPessoa('Mateus', 'Moreira', 25)
const pessoa2 = criaPessoa('Pedro', 'Moreira', 47)
const pessoa3 = criaPessoa('Ester', 'Moreira', 13)
const pessoa4 = criaPessoa('Jw', 'Moreira', 45)

console.log(pessoa1);