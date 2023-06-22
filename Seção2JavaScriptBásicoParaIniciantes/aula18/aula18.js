let nome = 'Luiz'

let a = 'A'
let b = a

a = 'outra coisa'
console.log(a, b);

/*
    Primitivos (imutáveis) - string, number, boolean, undefined, null

    Referência (mutável) - array, object, function
*/

let refe = [1,2,3]
let rece = refe
let c = rece
console.log(refe, rece);

refe.push(4)
console.log(refe, rece);

rece.pop()
refe.pop()
console.log(rece,refe);

rece.push('Oi')
console.log(c, rece, refe);