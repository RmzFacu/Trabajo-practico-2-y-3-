import React, { useState } from 'react';
import './App.css';
import Titulo from './componentes/Titulo';
import TarjetaDePerfil from './componentes/TarjetaDePerfil';
import ListaDeHabilidades from './componentes/ListaDeHabilidades';

function App() {
const [estado,setEstado]=useState(false)
  
let usuario={
     nombre: "miguel guerrero", 
     profesion: "analista", 
     edad:"38" 
  }

let lista=['React', 'JavaScript', 'HTML',"css"]

  let mostrar=()=>{
    if (estado=== true) {
      setEstado(false)
    }else{
      setEstado(true)
    }
  }
  return (
    <div className="App">
    
    <Titulo></Titulo>
    <TarjetaDePerfil dato={usuario}></TarjetaDePerfil>
    <button onClick={mostrar}>Mostrar</button>
    {estado&& <ListaDeHabilidades lista={lista}></ListaDeHabilidades>}
    
    </div>
  );
}

export default App;
