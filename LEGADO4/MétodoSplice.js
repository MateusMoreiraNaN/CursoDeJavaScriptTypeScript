//           -6         -5         -4         -3             -2       -1
//                 0         1        2       3            4       5
const nomes = ['Eduardo', 'Maria', 'Joana', 'Mateus', 'Rosana', 'Julia']

// nomes.splice(indice, delete, elem1, elem2, elem3)
//pop
//const removes =  nomes.splice(-1, 1, 'Luiz', 'oi')

//shift
//const removes =  nomes.splice(0, 1)

//push
nomes.splice(nomes.length, 0, 'luiz')

console.log(nomes);

