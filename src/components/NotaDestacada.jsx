import React from 'react'
import { Link } from 'react-router-dom'

export const NotaDestacada = ({notaFeatured}) => {
  return (
          <div className="container my-3">

              <div className="row align-items-center">
              
                <div className="col-sm-12 col-md-7">
                  <Link to={"/nota/"+notaFeatured.id} style={{textDecoration:"none"}}>
                    <img src={notaFeatured.imagen1} className='img-fluid w-100' style={{maxHeight:"325px"}} alt="" />
                  </Link>
                    
                </div>
                <div className="col-sm-12 col-md-5 py-2">              
                    <h2 className='text-start'>{notaFeatured.titulo}</h2>          
                    <p className="text-start mt-3">{notaFeatured.intro}</p>
                </div>
              </div>
                
          </div>
     
  )
}
