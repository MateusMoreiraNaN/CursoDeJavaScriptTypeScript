function Produto(nome, preco, estoque){
    

    Object.defineProperty(this, 'estoque',{
        enumerable: true, 
        configurable: false,
        get:() =>{
            return estoque
        },
        set: ()=>{
            
        }

    })

   
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 500000000000
delete p1.estoque // configurable

console.log(p1);
console.log(p1.estoque);