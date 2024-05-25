import React from 'react'
import vector from '../datos/vector'
import { Link } from 'react-router-dom'


export const Header = ({filtrarCategoria}) => {
 
  return (
   
        <nav className='navbar navbar-expand-lg d-none d-lg-block'>
          <hr />
            <ul className='nav nav-underline justify-content-center'>
            
            {
              vector.map(elem => (
                <li className='nav-item text-uppercase' key={elem.id}>
                  <Link to={"/"} className='nav-link' onClick={()=> filtrarCategoria(elem.categoria)} style={{textDecoration:"none", color:"black",fontSize:"14px"}}>{elem.categoria}</Link>
                </li>
              ))
            }
            
          </ul>
        </nav>
       
   
  )
}
