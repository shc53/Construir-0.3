import React from 'react'
import { Link } from 'react-router-dom';

export const Sugeridos = ({notas}) => {

    const random = notas.slice(1, 6);

  return (
    <div>
        <nav className="nav flex-column text-start">
            {random.map( nota => (
                <li key={nota.id}>
                    <Link to={"/notas/"+nota.id} className="nav-link" style={{color:"black"}}>
                        <p>{nota.titulo}</p>
                    </Link>
                </li>
                ))}
        </nav>
    </div>
  )
}
