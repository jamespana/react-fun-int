import logo from './logo.svg';
import './App.css';
import Saludo from './componentes/Saludo';
import Input from './componentes/Input';
import Traductor from './componentes/Traductor';
import Calculadora from './componentes/Calculadora';
import TraductorV2 from './componentes/TraductorV2';
import Dog from './componentes/Dog';
import Productos from './componentes/Productos';
import Fila from './componentes/Fila';

function App() {
  return (
    <div >
      <header >
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Saludo nombres="Jorge" apellidos="Medina"/>
      {/*<Saludo nombres="Curso" apellidos="React "/>*/}
      {/*<Input/>*/}
      {/*<Traductor/>*/}
      {/*<Calculadora/>*/}
      {/*<TraductorV2/>*/}
      <br/>
      {/*<Dog/>*/}
      <br/>
      <Productos/>      
    </div>
  );
}

export default App;
