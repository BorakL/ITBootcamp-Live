
export const Ship = (ship) => {

    const shipContainer = document.createElement('div')
    shipContainer.className = 'launch'

    shipContainer.innerHTML = `
    <div class="inner-div-0">
        <a href='${ship.url}'><img src="${ship.image}" alt=""></a>
    </div>
    <div class="inner-div-1">
        <span>${ship.ship_name} | ${ship.ship_type}</span>
    </div>
    <div class="inner-div-2">
        <span>${ship.active ? 'Aktivan' : 'Neaktivan'}</span>
    </div>
    `

    return shipContainer
}