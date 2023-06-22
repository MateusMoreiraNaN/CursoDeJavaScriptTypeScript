//const alunos = 'Luiz Mateus Pedro'
//Array
const alunos = ['Mateus', 'João', 'Pedro', true, null, 100]

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos.length);

alunos.push('Luiza')
alunos.push('Fábio') // ultimo

alunos.unshift('Ana') // primeiro

const remove = alunos.pop() // remove o ultimo


console.log(alunos);

console.log(remove);

console.log(alunos[100]);

alunos.unshift('Arya')

console.log(alunos.splice(0, 4));