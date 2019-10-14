import React from 'react';
import logo from './logo.svg';
import './App.css';
import A from './components/A';
import Box from './components/Box';
import VegItem from './components/VegItem';
import NonVegItem from './components/NonVegItem';

function App() {
  return (
    <div className="container">
      <hr />
      <h1> React Adv concepts</h1>
      <hr />

      {
        /* 
        <A color="red"/>
        <A color="blue"/>
        <A color="green"/> 
        */
      }


      <Box>
        <h1>Veg only</h1>
        <VegItem />
        <VegItem />
        <VegItem />
      </Box>

      <Box>
        <h1>Non-Veg only</h1>
        <NonVegItem />
        <NonVegItem />
        <NonVegItem />
        <NonVegItem />
      </Box>

      <Box>
        <h1> Veg & Non-Veg </h1>
        <VegItem />
        <NonVegItem />
      </Box>


    </div>
  );
}

export default App;
