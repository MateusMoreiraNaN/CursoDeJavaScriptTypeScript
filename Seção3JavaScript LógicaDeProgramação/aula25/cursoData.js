const curso1 = ()=>{
    const curso1 =  new Date(2027, 4)
    return curso1
}

const curso2 = ()=>{
    const curso2 =  new Date(2013, 5)
    return curso2
}

const curso3 = ()=>{
    const curso3 =  new Date(2029, 1)
    return curso3
    
}

let meuCurso = curso3

if(meuCurso === curso1 ){
    console.log(`seu curso termina em ${curso1()}`);
}else if(meuCurso === curso2){
    console.log(`seu curso termina em ${curso2()}`);
}else{
    console.log('falha no sistema');
}