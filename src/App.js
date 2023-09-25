import './App.css';
import Greeting from "./components/pure/greeting";
import TaskList from "./components/container/task_list";
import Ejemplo1 from './hooks/Ejemplo1';
import MiCompConContexto from './hooks/CompContext';
import Father from './components/container/father';
import Child from './components/pure/child';

function App() {
  return (
    
      <div className="App">
      {/*Componente propio Greetings*/}
        {/*<Greeting name = 'Carmen'/>*/}
        {/*<MiCompConContexto>MiCompConContexto</MiCompConContexto>*/}
        <TaskList></TaskList>
        <Father>

        </Father>
        {/*<Ejemplo1/>*/}
      </div>
    
   
  );
}

export default App;
