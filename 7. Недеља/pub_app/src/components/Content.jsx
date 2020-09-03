import React from 'react'
import Osoba from './Osoba'

const Content = ({ o1, o2, o3, a1, a2, a3 }) => {
    return (
        <>
            <Osoba ime={o1} pice={a1} />
            <Osoba ime={o2} pice={a2} />
            <Osoba ime={o3} pice={a3} />
        </>
    )
}

export default Content