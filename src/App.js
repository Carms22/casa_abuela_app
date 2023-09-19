import './App.css';
import Greeting from "./components/pure/greeting";
import TaskList from "./components/container/task_list";
import Ejemplo1 from './hooks/Ejemplo1';

function App() {
  return (
    
      <div className="App">
      {/*Componente propio Greetings*/}
        <Greeting name = 'Carmen'/>
        <TaskList></TaskList>
        <Ejemplo1/>
      </div>
    
   
  );
}

export default App;
