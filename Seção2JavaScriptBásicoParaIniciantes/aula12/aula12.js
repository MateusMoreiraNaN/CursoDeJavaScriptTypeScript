
//               01 23456
let umaString = 'Um texto'

console.log(umaString)
console.log(umaString.charAt(0));
console.log(umaString.charAt(1));
console.log(umaString.charAt(2));
console.log(umaString.charAt(3));
console.log(umaString.charAt(4));

console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m'));

let string = 'O rato roeu a roupa do rei de roma'
console.log(string.length);
console.log(string.slice(2, 6));
console.log(string.slice(-4));
console.log(string.replace(/r/g, '#'));

console.log(string.toLocaleLowerCase());
console.log(string.toUpperCase());
console.log(string.split(' ',2));