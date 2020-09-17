import React from 'react'
import { Link } from 'react-router-dom'

const Citati = ({citati}) => {
    return (
        <div>
            <h1>Цитати</h1>
            {citati.map(citat => <div key={citat.id}>
                                    <Link to={`/citat/${citat.id}`}>
                                        {citat.text}
                                    </Link>
                                </div>
                                )}
        </div>
    )
}

export default Citati
