const pontuacaoUsuario = 999
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal'

const corUsuario = 'Black'
const corPadrao = corUsuario || 'azul'

console.log(nivelUsuario, corPadrao);


/*
if(pontuacaoUsuario >= 1000){
    console.log('Usuario VIP');
}else{
    console.log('Usúario normal');
}
*/