let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

let narudzbine = []
let id = 0

const selectDino = document.querySelector('#select-dino')
dinos.forEach(dino => {
    const option = document.createElement('option')
    option.value = dino.id
    option.textContent = dino.name
    selectDino.appendChild(option)
})

const kupacInput = document.querySelector('#kupac')
const naruciForma = document.querySelector('#forma')
const napomenaTa = document.querySelector('.textarea-field')
const itemContainer = document.querySelector('#item-container')

const isValid = () => kupacInput.value.trim() !== ''
    && selectDino.value.trim() !== ''
    && kupacInput.value.trim().length >= 4


const addElemToDOM = (elem) => {

    const item = document.createElement('div')
    item.className = 'item'
    const p0 = document.createElement('p')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const p5 = document.createElement('p')

    p0.innerHTML = `<img style="width: 150px;" src="${elem.slika}">`
    p1.innerHTML = `<span>Купац:</span> ${elem.kupac}`
    p2.innerHTML = `<span>Напомена:</span>${elem.napomena} `
    p3.innerHTML = `<span>Диносаурус: </span> ${elem.dino.name} `
    p4.innerHTML = `<span>Цена: </span> ${elem.cena} `

    const btnObrisi = document.createElement('button')
    btnObrisi.innerText = 'Обриши'
    btnObrisi.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove()
        narudzbine.splice(narudzbine.findIndex(el => el.id === elem.id), 1)
    })

    p5.appendChild(btnObrisi)
    item.append(p0, p1, p2, p3, p4, p5)
    itemContainer.appendChild(item)

    kupacInput.value = ''
    napomenaTa.value = ''
    selectDino.value = '-1'

}

naruciForma.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!isValid()) {
        const greska = document.createElement('div')
        greska.innerHTML = `<b style="color: red;">GRESKA</b>`

        e.target.insertBefore(greska, e.target.children[e.target.children.length])

        setTimeout(() => {
            greska.remove()
        }, 1200)

        return
    }
    narudzbine.push({
        id: id,
        kupac: kupacInput.value.trim(),
        dino: dinos.find(dino => dino.id == Number(selectDino.value)),
        napomena: napomenaTa.value.trim() == '' ? '/' : napomenaTa.value.trim(),
        cena: dinos.find(dino => dino.id == Number(selectDino.value)).cena,
        slika: dinos.find(dino => dino.id == Number(selectDino.value)).img
    })

    // console.log(narudzbine[narudzbine.length - 1]);
    addElemToDOM(narudzbine[narudzbine.length - 1])
    id++

})

const all = document.querySelector('#btn-all')
all.addEventListener('click', (e) => {
    console.log(narudzbine);
})