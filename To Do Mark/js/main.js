const elementoLista = document.querySelector('ul')
const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')


const tarefas = []

function mostraTarefas(){

    elementoLista.innerHTML = ''

    for(tarefa of tarefas){
        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(tarefa)

        const elementoLink = document.createElement('a')
        const pos = tarefas.indexOf(tarefa)

        const linkText = document.createTextNode('X')
        elementoLink.appendChild(linkText)

       // elementoLink.setAttribute('href', '#')
        elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoLink)

    }

}
mostraTarefas()

function addTarefa(){
    const textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    elementoInput.value = ''
    mostraTarefas()
   // salvarElemento()
}

elementoBotao.setAttribute('onclick','addTarefa()')

function deletaTarefa(pos){
    tarefas.splice(pos, 1)
    mostraTarefas()
    //salvarElemento()
}
document.getElementById('ul').value = localStorage.tarefas
var salvarElemento = function(){
    var ul = document.getElementById('ul').value
    localStorage.setItem('ul',tarefas)

}

document.onchange = salvarElemento