import React from 'react'
import { Header } from './Header'
import { HeaderOff } from './HeaderOff'
import { Footer } from './Footer'


export const DetallesFeatured = ({notaFeatured ,filtrarCategoria}) => {

    
    
    //pruebas innerHTML //
    const text = notaFeatured.texto;

  return (
    <div className="container-fluid">
    <HeaderOff filtrarCategoria={filtrarCategoria}/>
    <Header filtrarCategoria={filtrarCategoria}/>
    
    <div className="container-xl my-3">
      <div className="row d-flex justify-content-center">
        
        <div className="card" style={{border:"none"}}>
          <div className="col">
            <p className='text-start'>{notaFeatured.categoria}</p>
            <p className='card-title fs-1 text-start'>{notaFeatured.titulo}</p>
          </div>  
          <div className="col">
            <div className="card-body text-start">
              <p className='fs-5'>{notaFeatured.intro}</p>
              <strong className=''>{notaFeatured.fecha}</strong>
              <div className="my-3" style={{maxHeight:"500px"}}>
                <img src={notaFeatured.imagen1} className='img-fluid w-100' style={{maxHeight:"475px"}}  alt=""/>
              </div>
              <hr />
              <div className='text-start fs-5 mt-3' dangerouslySetInnerHTML={{ __html: text }}/> 
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}
