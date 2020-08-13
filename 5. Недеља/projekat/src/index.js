import { niz, deleteById } from './todo.js'

const app = document.getElementById('app')


const renderAll = (arr) => {
    app.innerHTML = ''

    arr.forEach(item => {
        const par = document.createElement('p')
        par.textContent = item.desc // + item.id

        const btnDel = document.createElement('button')
        btnDel.textContent = 'OBRISI'

        btnDel.addEventListener('click',() => {
            deleteById(item.id)
            renderAll(niz)
        })
    
        if(item.done){
            par.style.textDecoration = 'line-through'
        }

        par.addEventListener('click',() => {
            // changeById(item.id,{
            //     ...item,
            //     done: !item.done
            // })
            item.done = !item.done
            renderAll(niz)
        })
        
        app.append(par,btnDel)
    })
}

renderAll(niz)



