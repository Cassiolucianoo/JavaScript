console.log(typeof Object)

//criando um objeto a partir de uma função
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())