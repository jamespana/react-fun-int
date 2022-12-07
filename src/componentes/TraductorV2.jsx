import { useState } from "react";

const TraductorV2 = () => {
    const [espanol, setEspanol] = useState('Lunes');
    const [ingles, setIngles] = useState('Monday');
    const [portugues, setPortugues] = useState('Segunda-feira');
    const [idioma, setIdioma] = useState('');
    const [resultado, setResultado] = useState('');

    const onChangeInput = (event, executeFn) => {
        event.preventDefault();
        executeFn(event.target.value);
    }

    function onChangeEspanol(event) {
        event.preventDefault();
        setEspanol(event.target.value);
    }          
    const onChangeIngles = (event) => {
        event.preventDefault();
        setIngles(event.target.value);
    }
    const onChangePortugues = (event) => {
        event.preventDefault();
        setPortugues(event.target.value);
    }        
    const onChangeIdioma = (event) => {
        event.preventDefault();
        setIdioma(event.target.value);
    }            
    const onChangeResultado = (event) => {
        event.preventDefault();
        setResultado(event.target.value);
    }                
    const onClickProcesar = (event) => {
        event.preventDefault();
        console.log('Boton Presionado...');
        if (idioma === 'espanol') {
            setResultado(espanol);
            return;
        }
        if (idioma === 'inlges') {
            setResultado(ingles);
            return;
        }
        if (idioma === 'portugues') {
            setResultado(portugues);
            return;
        }        
    }

    return(
        <div>
            <h1>Traductor</h1>
            <div>
                <label> Español:</label>
                <input type='text' id='espanol' name='espanol' value={espanol}
                    onChange={(event) => {
                        onChangeInput(event, setEspanol);
                        }
                    } />
                
                <label> Inlges:</label>
                <input type='text' id='ingles' name='ingles' value={ingles} 
                    onChange={(event) => {                                                
                        onChangeInput(event, setIngles);
                        }
                    } />
                
                <label> Portugues:</label>
                <input type='text' id='portugues' name='portugues' value={portugues} 
                    onChange={(event) => {
                        onChangeInput(event, setPortugues);
                        }
                    }
                    />                        
            </div>
            <br/>
            <div>
                <label> Selecione Idiona:</label>
                <input type='text' id='idioma' name='idioma' value={idioma} onChange={onChangeIdioma}/>                        
            </div>            
            <br/>
            <div>
                <label> Resultado:</label>
                <input type='text' id='resultado' name='resultado' value={resultado} disabled 
                    onChange={(event) => {
                        onChangeInput(event, setResultado);
                        }
                    } />                        
            </div>                        
            <br/>
            <div>
                <button onClick={onClickProcesar}>Procesar</button>
            </div>            
        </div>
    )
};

export default TraductorV2;