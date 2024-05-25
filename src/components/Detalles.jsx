import React from 'react'
import { useParams } from 'react-router-dom'

import { Header } from './Header'
import { HeaderOff } from './HeaderOff'
import { Footer } from './Footer'
import { DetallesPrueba } from './DetallesPrueba'

export const Detalles = ({notas, filtrarCategoria}) => {

  const {notaId} = useParams()
  const notaAct = notas.find(( nota ) => nota.id == notaId);

//pruebas innerHTML //
  const text = notaAct.texto;
 

  return (
    <div className="container-fluid">
      <HeaderOff filtrarCategoria={filtrarCategoria}/>
      <Header filtrarCategoria={filtrarCategoria}/>
      <hr />
      <DetallesPrueba notas={notas} notaAct={notaAct}></DetallesPrueba>
      <div className="container my-3">
        <div className="row justify-content-center">
          
          <div className="card" style={{border:"none"}}>
            <div className="col-10">
              <p className='text-start'>{notaAct.categoria}</p>
              <p className='card-title fs-1 text-start'>{notaAct.titulo}</p>
            </div>  
            <div className="col-10">
              <div className="card-body text-start">
                <p className='fs-5'>{notaAct.intro}</p>
                <strong className=''>{notaAct.fecha}</strong>
                <div className="my-3">
                  <img className='img-fluid w-100' src={notaAct.imagen2} style={{maxHeight:"475px"}} alt="" />
                </div>
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
