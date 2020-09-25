console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1.nome = 'Bola2'

console.log(obj1)
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){

        console.log('executando.....')

    }
}

const obj2 = new Obj ('Bolota')
const obj3 = new Obj ('Bolinha')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()