const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

//console.log(pessoa.nome)
//console.log(pessoa.sobrenome);

const pessoa2 = new Object()
pessoa2.nome2 = 'Mateus'
pessoa2.sobrenome2 = 'Moreira'
pessoa2.idade = 45

console.log(pessoa1, pessoa2);

delete pessoa1.sobrenome
console.log(pessoa1);

pessoa2.falarNome = function(){
    return `${this.nome2} está falando seu nome`
}
pessoa2.getDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa2.falarNome());

console.log(pessoa2.getDataNascimento());

for(let chave in pessoa2){
    console.log(pessoa2[chave]);
}


console.log('--------------------------------------')

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Mateus', 'lalala')

console.log(p1.nomeCompleto);

console.log('--------------------------------------')

//constructor functions
function Pessoa(nome, sobrenome){
    this.nome = nome // this porque varia
    this.sobrenome = sobrenome

    //Object.freeze(this)
}

const p2 = new Pessoa('Pedro', 'zzzzzz')
p2.nome = 'outro cnome'
const p4 = new Pessoa('Arya', 'mye')
Object.freeze(p4)


console.log(p2);
console.log(p4);

const p3 = {}
p3.nome = 'Marta'

