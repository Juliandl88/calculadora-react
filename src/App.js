import './App.css';
import logo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla"; 
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs"  // con mathjs evalua la expresion como un string y la expresa como un math
const Swal = require('sweetalert2') // Para hacer alertas

function App() {

  const [ input, setInput ] = useState("");

  const agregarInput = valor =>{
    setInput(input + valor);
  }

  
  const calcularResultado = () => {
    if(input){ // si es falsa no se ejecuta
    setInput(evaluate(input))
  }else{
    Swal.fire('Ingresa valores a calcular')
  }
} 

  return (
    <div className="App">
     <div className="contenedor-logo">    
        <img 
        className="logo"
        src={ logo }
        alt="Freecodecamp logo" />
     </div>
     <div className="contenedor-calculadora">
       <Pantalla input={input}/>
       <div className="fila">
         <Boton manejarClic={agregarInput}>1</Boton>
         <Boton manejarClic={agregarInput}>2</Boton>
         <Boton manejarClic={agregarInput}>3</Boton>
         <Boton manejarClic={agregarInput}>+</Boton>
       </div>
       <div className="fila">
         <Boton manejarClic={agregarInput}>4</Boton>
         <Boton manejarClic={agregarInput}>5</Boton>
         <Boton manejarClic={agregarInput}>6</Boton>
         <Boton manejarClic={agregarInput}>-</Boton>
       </div>
       <div className="fila">
         <Boton manejarClic={agregarInput}>7</Boton>
         <Boton manejarClic={agregarInput}>8</Boton>
         <Boton manejarClic={agregarInput}>9</Boton>
         <Boton manejarClic={agregarInput}>*</Boton>
       </div>
       <div className="fila">
         <Boton manejarClic={calcularResultado}>=</Boton>
         <Boton manejarClic={agregarInput}>0</Boton>
         <Boton manejarClic={agregarInput}>.</Boton>
         <Boton manejarClic={agregarInput}>/</Boton>
       </div>
       <div className="fila">
       <BotonClear manejarClear={() => setInput("")}>
         Clear
       </BotonClear>
       </div>
     </div>
    </div>
  );
}

export default App;
