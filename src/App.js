import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      
      <button onClick={getQuote} >  Todays Quote </button>
    </div>
  );
}

export default App;
