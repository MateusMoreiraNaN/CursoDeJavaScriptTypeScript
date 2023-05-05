
//               0           1      2        3      4        5
const nomes = ['ty' ,'Eduardo', 'Maria', 'Joana', 'Mateus', 'Rosana']
//const novo = [...nomes]
const novo = nomes.slice(1, -2)

nomes[2] = 'João'

nomes.pop()// remover // no fim
nomes.shift() // remover // no começo

nomes.push('Pedro') // adicionar
nomes.push('Marta')
let nome = 'Mateus'
nomes.unshift('Julia') // no começo

if(nome != nomes){
    nomes.push(nome)
}else if(nome === nomes){
    console.log('Já existe esse nome no array');
}



console.log(nomes);
console.log(nomes.length);
console.log(novo);

const pessoa = 'Luiz Otávio Miranda'
const pessoaAr = pessoa.split(' ')
console.log(pessoaAr);

const pessoas2 = ['Mateus', 'Moreira', 'Godoi']
const pessoa2 = pessoas2.join(' ')
console.log(pessoa2);