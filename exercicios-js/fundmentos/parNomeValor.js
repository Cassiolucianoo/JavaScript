//par nome/valor

const oi = 'Opa' //contexto léxico 1

//função
function exec(){
    const saudacao = 'Fala!!! cassio luciano da silva' //contexto léxico 2
    return saudacao
}

//Obetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Cassio luciano da silva',
    idade: 32,
    peso:72,
    endereco:{
        logradouro: 'Rua aguas de março',
        numero: 78
    }
}

console.log(Cliente)
console.log(exec())
console.log(oi)

