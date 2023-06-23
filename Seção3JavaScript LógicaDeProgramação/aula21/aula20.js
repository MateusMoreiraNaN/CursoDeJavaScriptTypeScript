const falaoi = ()=>{
    return 'oi'
}

const vaiExecutar = 'oi'

console.log(vaiExecutar && falaoi());

const corUsuario = null
const corPadrao = corUsuario || 'preto'

const a = 0
const b = null
const c = 'false'
const d = false
const e = NaN
const f = null

console.log(a || b || c || d || e);