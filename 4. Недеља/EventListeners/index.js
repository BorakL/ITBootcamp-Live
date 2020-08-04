const dugme = document.getElementById('dugme')
const count = document.getElementById('count')

let i = 0

dugme.addEventListener('click',(event) => {
    console.log(event.target)
})

const forma = document.querySelector('#form')
const inputUsername = document.querySelector('#username')
const sb = document.querySelector('#select')

forma.addEventListener('submit',(e) => {
    e.preventDefault()
    console.log(inputUsername.value)
    console.log(sb.value)
})