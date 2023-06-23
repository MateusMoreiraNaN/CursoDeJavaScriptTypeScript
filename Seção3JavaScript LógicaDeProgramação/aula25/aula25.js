/*
const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + tresHoras+ umDia)
console.log(data.toString());
*/

const data = new Date(2019, 11)
console.log(data.toString());
console.log(data.getDate());

const formData=(data2)=> {
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const hora = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data2 = new Date()
const dataBrasil = formData(data2)
console.log(dataBrasil);
