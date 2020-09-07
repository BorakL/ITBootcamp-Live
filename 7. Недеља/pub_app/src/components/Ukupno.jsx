import React from 'react'

const Ukupno = ({ kolicina }) => {
    return (
        kolicina === 0 ? <p>Nema</p> : <p>Укупно пића: {kolicina}</p>
    )
}

export default Ukupno