import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

const getQuote = () => {
  axios.get('https://api.quotable.io/random')
  .then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  }) 
}


  return (
    <div className="App">
      
      <button onClick={getQuote} >  Todays Quote </button>
    </div>
  );
}

export default App;
