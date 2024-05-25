import React from 'react'
import { Link } from 'react-router-dom'

export const Notas = ({notas}) => {

  
  
  return (
    <div className="container">  
        <hr />
        <div className="row mt-3">
               
                {
                    notas.map(nota => (
                     
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="card text-start h-100 py-2" key={nota.id} style={{ border:"none"}}>
                            <Link to={"/notas/"+nota.id} style={{textDecoration:"none"}}>
                              <img className="card-img-top img-fluid" src={nota.imagen1} alt={nota.titulo} />
                            </Link>
                            
                            <div className="card-body">
                              <Link to={"/notas/"+nota.id} style={{textDecoration:"none", color:"black"}}>
                                <h5 className="card-title" style={{fontWeight:"600"}}>{nota.titulo}</h5>
                              </Link>              
                              <div className="d-flex justify-content-between my-2">
                                <strong style={{color:"#0095da"}}>{nota.categoria}</strong>
                                <span style={{color:"#0095da"}} >{nota.fecha}</span> 
                              </div>     
                              <p className="card-text">{nota.intro}</p>                 
                            </div>
                          
                          </div>
                        </div>
                    ))
                }
                
                      
        </div>
    </div>
  )
}
