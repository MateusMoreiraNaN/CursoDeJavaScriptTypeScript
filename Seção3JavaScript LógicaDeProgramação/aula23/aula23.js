const n1 = 10

if(1 === 1){
    console.log('LITERAL');
}

if(n1 >= 0 && n1 <= 5){
    console.log('o número está entre 0 e 5');
}else if(n1 >= 6 && n1 <= 8){
    console.log('o número está entre 6 e 8');
}else if(n1 >= 9 && n1 <= 11){
    console.log('o número está entre 9 e 11');
}else{
    console.log('O número nõa está entre 0 e 11');
}

console.log('Fora do if');