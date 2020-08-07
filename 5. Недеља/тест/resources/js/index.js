const time = document.querySelector('#txt-time')
const test = document.querySelector('#test')

test.addEventListener('click',(e) => {
    e.target.parent.remove()

})