
const Fila = ({title,brand, category, thumbnail} ) => {
    return (
        <>
            <td>{title}</td>
            <td>{brand}</td>
            <td>{category}</td>
            <td>{thumbnail}</td>
        </>
    );
};

export default Fila;