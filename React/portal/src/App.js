import './App.css';

import FirstComponents from "./components/FirstComponents";
import AnotherComponent from "./components/AnotherComponent";
import Hooks from './components/Hooks';
import Evento from './components/Evento';

function App() {
  return (
    <div className="App">
      <h2>Portal</h2>
      <FirstComponents/>
      <AnotherComponent/>
      <Hooks/>
      <Evento />
    </div>
  );
}

export default App;
