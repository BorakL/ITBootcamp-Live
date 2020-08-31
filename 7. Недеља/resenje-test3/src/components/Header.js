export const Header = (info) => {
    const header = document.createElement('div')
    const p = document.createElement('p')
    p.innerText = `${info.name} | ${info.founder} | ${info.founded}`
    header.appendChild(p)
    return header
}