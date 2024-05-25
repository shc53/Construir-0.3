import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Detalles } from './components/Detalles';
import { DetallesFeatured } from './components/DetallesFeatured';
import data from './datos/data';
import dataFeat from './datos/datafeat';
import { ScrollRestoration } from 'react-router-dom';




function App() {
 
  const [notas, setNotas] = useState(data);

  const inicialFeatured = dataFeat.find( notaDest => (notaDest.categoria === "Tecnología"))
  const [notaFeatured, setNotaFeatured] = useState(inicialFeatured)
 

  const filtrarCategoria = (categoria) => {
    if (categoria === "Home"){ 
      
      setNotas(data)
      return
    }
    const featuredFiltrada = dataFeat.find(notaDest => (notaDest.categoria === categoria));
    setNotaFeatured(featuredFiltrada)
    const notasFiltradas = data.filter(nota => (nota.categoria === categoria));
    setNotas(notasFiltradas);    
  }

  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          
          <Route exact path='/' element={<Home notas={notas} notaFeatured={notaFeatured} filtrarCategoria={filtrarCategoria}/>}/>
          <Route exact path='/notas/:notaId' element={<Detalles notas={notas} filtrarCategoria={filtrarCategoria}/>} />
          <Route path='/nota/:notaId' element={<DetallesFeatured notaFeatured={notaFeatured} filtrarCategoria={filtrarCategoria}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
