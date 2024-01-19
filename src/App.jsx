import React from "react";
import './App.css';   
import Inicio from '/src/components/Inicio.jsx';
import Saludo from './Components/Saludo.jsx';
import Skills from './Components/Skills.jsx';
import Proyectos from './Components/Proyectos.jsx';
import Miniproyect from './Components/Miniproyect.jsx';
import Footer from './Components/Footer.jsx';


  
export default function App() {
  return (
    <div className="">
      <nav className="nav">
        <Inicio  />  
        <div className="flex justify-around items-center  saludo ">
        <Saludo/> 
      
      </div>
      <div className="flex flex-col
      justify-center">
        <Skills/>
       
      </div>
       
      </nav> 
<div className="fondo    ">
  <div className="flex justify-center ">
       < Proyectos />
       </div> 
</div>
 <div className="fondo2   ">
  <div className="flex justify-center ">
       < Miniproyect />
       </div> 
</div>
<div className="fondo2   ">
  <div className="flex justify-center ">
       < Footer />
       </div> 
</div>

      
     
     
     
    </div>
    
     
  );
  
}