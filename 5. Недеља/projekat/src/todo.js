// Низ објеката који описују TODO задатке
// Омогућити: 
// додавање на крај, add(novi)
// брисање са ID-јем, deleteById(id)
// мењање на позицији која има одређен ID  change(id,novi)

const niz = [
    {
        id: 0,
        desc: 'sdfkjgdg',
        done: true
    },
    {
        id: 42342,
        desc: '1231',
        done: true
    },{
        id: 120,
        desc: '12312',
        done: false
    },{
        id: 230,
        desc: 'sdf2123',
        done: true
    },{
        id: 43430,
        desc: 'sdfkdsfsfdsjgdg',
        done: true
    },{
        id: 34340,
        desc: 'sdfsfsdfsdfsdfkjgdg',
        done: true
    },
]

const add = (item,arr = niz) => {
    arr.push(item)
}


const deleteById = (id,arr = niz) => {
    let index = arr.findIndex(el => el.id === id)

    if(index == -1) return 

    arr.splice(index,1)
}

const changeById = ((id,item,arr = niz) => {
    let index = arr.findIndex(el => el.id === id)

    if(index == -1) return 

    arr.splice(index,1,item)
})

export {
    niz,
    add,
    deleteById,
    changeById
}



