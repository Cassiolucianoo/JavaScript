// array tipo de ddos dinamicos 
const valor = [7.2,8.9,6.3,9.2]
console.log(valor[0], valor[3])
console.log(valor[4])

// forma de acessar um array  adicionar um valor
valor[4] = 10
console.log(valor)
console.log(valor.length)

//é uma estrutura que se pode misturar tipo de dados porem não é uma boa pratica 
//metodo push
valor.push({id: 3}, false, null, 'teste')
console.log(valor)

//metodo pop para tirar de uma lista
console.log(valor.pop())

//metodo delete para tirar um atributo de dentro de um objeto 
delete valor[0]
console.log(valor)

// aqui apresenta o tipo que é o array que ele é um objeto 
console.log(typeof valor)