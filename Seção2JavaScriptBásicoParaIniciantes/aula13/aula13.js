let num1 = 10.564848481166400
let num2 = 2.5

//num1 = num1.toString()
//console.log(num1.toString(2) + num2);

//console.log(num1.toFixed(2));

let temp = num1 * 'ola'

console.log(Number.isNaN(temp));

let num3 = 0.7
let num4 = 0.1
/*
num3 += num4 //0.8
num3 += num4 //0.9
num3 += num4 //1.0
num3 += num4 //1.1
num3 += num4 //1.2
num3 += num4 //1.3

num3 = parseFloat(num3.toFixed(2))
*/

num3 = ((num3 * 100) + (num4 * 100)) / 100 // 0.8
num3 = ((num3 * 100) + (num4 * 100)) / 100 // 0.9
num3 = ((num3 * 100) + (num4 * 100)) / 100 // 1.0

console.log(num3);
console.log(Number.isInteger(num3));
