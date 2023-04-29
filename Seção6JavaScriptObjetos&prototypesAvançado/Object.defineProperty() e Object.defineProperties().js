function Produto(nome, preco, estoque){
    //this.nome = nome
    //this.preco = preco
    //this.estoque = estoque

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostrar a chave
        value: estoque, // valor
        writable: true, // pode alterar ou não
        configurable: false // configurável
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostrar a chave
            value: nome, // valor
            writable: false, // pode alterar ou não
            configurable: false // configurável
        },
        preco:{
            enumerable: true, // mostrar a chave
            value: preco, // valor
            writable: false, // pode alterar ou não
            configurable: false // configurável
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 500000000000
delete p1.estoque // configurable

console.log(p1);