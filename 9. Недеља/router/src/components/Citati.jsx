import React from 'react'
import Citat from './Citat'

const Citati = ({citati}) => {
    return (
        <div>
            {citati.map(citat => <Citat 
                                    key={citat.id} 
                                    author={citat.author} 
                                    text={citat.text} 
                                    url={citat.url} 
                                />)}
        </div>
    )
}

export default Citati
