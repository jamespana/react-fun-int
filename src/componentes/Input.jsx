import { useState } from "react";
const Input = () => {
    const [nombre, setnombre] = useState('');
    
    const cambioValorDelInput = (event) => {
        event.preventDefault();
        setnombre(event.target.value)
    }
    return (
      <div>
         <label> Nombre: </label> 
            <input type='text' id='nombre' 
                name='nombre' 
                value={nombre}
                onChange={cambioValorDelInput}
                >
            </input>
            {nombre}
        
      </div>
    );
 };
 
 export default Input;
