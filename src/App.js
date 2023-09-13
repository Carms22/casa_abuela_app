import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Greeting from "./components/pure/greeting";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/*Componente propio Greetings*/}
        <Greeting name = 'Carmen'/>
        <Routes>
          <Route>

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
