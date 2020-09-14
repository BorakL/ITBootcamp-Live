import React from 'react'

const Select = ({setRegion}) => {
    return (
        <select onChange={(e) => e.target.value !== 'all' ? setRegion(e.target.value) : setRegion(undefined)}>
            <option value={'all'}>Све</option>
            <option value={'africa'}>Африка</option>
            <option value={'europe'}>Европа</option>
            <option value={'americas'}>Америка</option>
            <option value={'asia'}>Азија</option>
            <option value={'oceania'}>Океанија</option>
        </select>
    )
}

export default Select