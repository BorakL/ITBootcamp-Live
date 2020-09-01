import { ShipList } from './components/ShipList.js'
import { Header } from './components/Header'
import { Filter } from './components/Filter'
import { getAllShips, getInfo } from './service'

const app = document.querySelector('#app')

getInfo().then(res => {
    let info = res.data
    getAllShips().then(res => {
        let filter = Filter()
        filter.addEventListener('change', () => {
            app.innerHTML = ''
            app.append(Header(info), filter, ShipList(res.data.filter(ship => ship.active + '' == filter.value)))
        })
        app.append(Header(info), filter, ShipList(res.data))
    })
})






