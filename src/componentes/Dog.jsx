import { useEffect, useState } from "react";

const Dog = () => {

const [titulo, setTitulo] = useState('Dog Componente');
//const [description, setDescription] = useState('');
const [data, setData] = useState({
    message: 'test'
});

const OnClickButtom = () => {
    setTitulo('Camio Valor');
    //setDescription('Camio Valor Descripción');
}
useEffect( () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            return response.json();
        })        
        .then( (data) => {
            //console.log(data);
            setData(data);
        })
    }, [titulo]);
    console.log('Loaded!!')
    return (
        <div>
            <h2>{titulo}</h2>
            <button onClick={OnClickButtom}>
                Cambando el Valor del Titulo
            </button>
            {data.message}
            <img src={data.message}/>
            <br/>
        </div>

    );
};
export default Dog;
