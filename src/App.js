import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';



function App() {

  const [quote, setQuote] = useState('')

const getQuote = () => {
  axios.get('https://api.quotable.io/random')
  .then(res => {
    setQuote(res.data.content)
    console.log(res)
  }).catch(err => {
    console.log(err)
  }) 
}


  return (
    <div className="App">
      
      <button onClick={getQuote} >  Todays Quote </button>
      <p>{quote}</p>
    </div>
  );
}

export default App;
