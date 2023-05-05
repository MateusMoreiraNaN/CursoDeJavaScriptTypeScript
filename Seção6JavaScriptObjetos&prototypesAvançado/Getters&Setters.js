function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque',{
        enumerable: true, 
        configurable: false,
        get:() =>{
            return estoque
        },
        set: (valor)=>{
           if(typeof valor !== 'number'){
                console.log('Bad value');
                return
           }

           estoquePrivado = valor
        }

    })

   
}

function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            valo = valor.replace('coisa.', '')
            nome = valor
        }
    }
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 'oi mateus'
delete p1.estoque // configurable

//console.log(p1);
console.log(p1.estoque);