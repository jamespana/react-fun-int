
import { useEffect, useState } from "react";
import Fila from "./Fila";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect( () => {
        fetch('https://dummyjson.com/products')
        .then(response => {
            return response.json();
        })        
        .then( (data) => {
            setProductos(data.products);
           // setData(data);
        })
    }, []);

    return (
        <>
            <h2>Mostrando Productos</h2>
            <table>                
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Brand</th>
                        <th>Categoria</th>
                        <th>Thumbnail</th>
                    </tr>
                </thead>                
                <tbody>
                    {productos.map((products) => {
                        return (
                            <tr key={products.id} >
                                <Fila
                                title={products.title}
                                brand={products.brand}
                                category={products.category}
                                thumbnail={products.thumbnail}
                                />
                            </tr>
                        );
                    } )}                    
                </tbody>
            </table>

        </>
    );
};

export default Productos;