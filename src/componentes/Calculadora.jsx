import { useState } from "react";

const Calculadora = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [accion, setAccion] = useState('');
    const [resultado, setResultado] = useState('');

    const onChangeNumero1 = (event) => {
        event.preventDefault();
        setNumero1(event.target.value);
    }          
    const onChangeNumero2 = (event) => {
        event.preventDefault();
        setNumero2(event.target.value);
    }
    const onChangeAccion = (event) => {
        event.preventDefault();
        setAccion(event.target.value);
    }            
    const onChangeResultado = (event) => {
        event.preventDefault();
        setResultado(event.target.value);
    }                
    const onClickProcesar = (event) => {
        event.preventDefault();
        if (accion === 'sumar') {
            setResultado( parseInt(numero1) + parseInt(numero2) );
        }
        if (accion === 'restar') {
            setResultado( parseInt(numero1) - parseInt(numero2) );
        }
        if (accion === 'dividir') {
            setResultado( parseInt(numero1) / parseInt(numero2) );
        }        
        if (accion === 'multiplicar') {
            setResultado( parseInt(numero1) * parseInt(numero2) );
        }                
    }
    return(
        <div>
            <h1>Calculadora</h1>
            <div>
                <label> Numero 1:</label>
                <input type='text' id='numero1' name='numero1' value={numero1} onChange={onChangeNumero1} />
                
                <label> Numro 2:</label>
                <input type='text' id='numero2' name='numero2' value={numero2} onChange={onChangeNumero2} />
                
            </div>
            <br/>
            <div>
                <label> Acción:</label>
                <input type='text' id='accion' name='accion' value={accion} onChange={onChangeAccion}/>
            </div>            
            <br/>
            <div>
                <label> Resultado:</label>
                <input type='text' id='resultado' name='resultado' value={resultado} disabled onChange={onChangeResultado} />                        
            </div>                        
            <br/>
            <div>
                <button onClick={onClickProcesar}>Procesar</button>
            </div>            
        </div>
    )
};

export default Calculadora;