import React from 'react'
import { Sugeridos } from './Sugeridos';

export const DetallesPrueba = ({notas,notaAct}) => {

  
    
  return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-12 text-start">
                    <p className='fs-2'>{notaAct.titulo}</p>
                    <p className='fs-5'>{notaAct.intro}</p>
                    <p className='fs-5'>{notaAct.fecha}</p>
                </div>
                <div className="col-lg-9 col-md-12">
                    <img className='img-fluid' src={notaAct.imagen1} alt="" />
                    <p className='fs-5 my-3 text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, enim incidunt expedita doloremque tempora necessitatibus vero sunt harum numquam officiis, quam eveniet beatae earum deleniti omnis? Aliquid corrupti atque, explicabo numquam ratione distinctio cum at odio facilis quos nisi et dolore quisquam! Totam, nostrum atque natus aliquam quibusdam quos quam.</p>
                </div>
                <div className="col-lg-3 col-md-12">
                    <p className='fs-3 text-start'>Lo mas visto</p>
                    <div class="d-flex align-items-end">
                        <span className="placeholder fw-bold col-6" style={{fontSize:"5px"}}></span>
                        <span className="placeholder col-6" style={{fontSize:"1px"}}></span>       
                    </div>    
                    
                    <div className="">
                       <Sugeridos notas={notas}/>
                    </div>
                </div>           
            </div>     
        </div>
  )
}
