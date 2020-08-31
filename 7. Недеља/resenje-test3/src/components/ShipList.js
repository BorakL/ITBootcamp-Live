
import { Ship } from "./Ship"

export const ShipList = (arr) => {
    const shipList = document.createElement('div')
    shipList.className = 'launch-list'

    arr.forEach(ship => {
        shipList.appendChild(Ship(ship))
    })
    return shipList
}
