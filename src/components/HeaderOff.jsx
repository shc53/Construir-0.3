import React from 'react'
import vector from '../datos/vector'
import { Link } from 'react-router-dom'

import logo from '../img/Encabezado.jpg'
import { Redes } from './Redes'

export const HeaderOff = ({filtrarCategoria}) => {
  return (
    <div className='container-fluid'>
        <nav className="navbar bg-white fixed-top-md" >
            <div className="container-fluid d-flex">
                    <div className="container-fluid d-flex justify-content-between align-items-start">
                        <button className="btn navbar-toggler" style={{border:"none"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="my-2">
                            <img className='img-fluid imgppal' src={logo} alt=""/>
                        </div>
                        <div className=""></div>
                    </div>
                    
                  
                
                
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="offcanvas-title mb-5" id="offcanvasNavbarLabel">
                            <img src={logo} alt="" style={{width:"200px"}}/>
                        </div>
                        <ul className="navbar-nav flex-grow-1">
                            {
                            vector.map(elem => (
                                <li className='nav-item text-uppercase linkHeaderoff' key={elem.id} data-bs-dismiss="offcanvas">
                                    <Link to={"/"} className='nav-link' onClick={()=> filtrarCategoria(elem.categoria)} style={{textDecoration:"none",}}>{elem.categoria}</Link>
                                </li>
                            ))
                            }
                            
                        </ul>
                       
                        
                            
                        
                    </div>
                </div>
               
            </div>
        </nav>
    </div>
  )
}
