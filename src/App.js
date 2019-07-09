import React from 'react';
import logo from './logo.svg';
import './App.css';
import spiderman from './spiderman.jpg'
import toystory from './toystory4.jpg'
import megashark from './megashark.jpg'

function Movie(props) {
  return (<div>
      <h2>{props.title} ({props.year})</h2>
      <img src={props.image}/>
    </div>);
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to the app</h1>
       <div>
        <Movie title='Spiderman' image={spiderman} year='2001'/>
        <Movie title='Toy Story' image={toystory} year='2002'/>
        <Movie title='Megashark' image={megashark} year='2003'/>
      </div>
    </div>

  );
}

export default App;
