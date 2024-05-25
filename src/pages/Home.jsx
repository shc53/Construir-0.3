import React from 'react'

import { Header } from '../components/Header'
import { Notas } from '../components/Notas'
import { NotaDestacada } from '../components/NotaDestacada'
import { HeaderOff } from '../components/HeaderOff' 
import { Footer } from '../components/Footer'


export const Home = ({notas , notaFeatured ,filtrarCategoria}) => {


  return (
    
    <div className="container-fluid">
            <HeaderOff filtrarCategoria={filtrarCategoria}/>
            
            
            <Header filtrarCategoria={filtrarCategoria}/>
              <hr className='hrppal'/>

              <NotaDestacada notaFeatured={notaFeatured}/>
              <Notas notas={notas}/>
              <Footer/>

        
    </div>
  )
}
