// Document object model

const divHello = document.getElementById('hello')
divHello.id = 'NESTO'

// divHello.className = ''

const paragrafi = document.getElementsByClassName('paragraf')
const paragrafiTest = document.querySelectorAll('.paragraf') // Листа елемената
console.log(paragrafi)
console.log(paragrafiTest)

const div2 = document.querySelector('.hello2') // Један елемент
console.log(div2)

/////////////////////////////////////////////////////

console.log(divHello.parentElement)
console.log(divHello.children)
console.log(divHello.previousElementSibling.previousElementSibling)
console.log(divHello.nextElementSibling)

//////////////////////////////////////////////////////

const noviParagraf = document.createElement('p')
noviParagraf.id = 'novi-paragraf'
noviParagraf.className = 'paragraf'
// noviParagraf.textContent = 'Hello from javascript <li>haha</li>'  // text
// noviParagraf.innerText = 'Hello from javascript <li>haha</li>' // text
noviParagraf.innerHTML = 'Hello from javascript <li>haha</li>' // HTML Структура



div2.appendChild(noviParagraf)




const container = document.createElement('div')
container.className = 'klasa1 klasa2'

const form = document.createElement('form')
const input1 = document.createElement('input')
const input2 = document.createElement('input')
container.appendChild(form)

const innerDiv = document.createElement('div')
// ...

container.appendChild(innerDiv)




console.log(div2.children[1].appendChild(form))








