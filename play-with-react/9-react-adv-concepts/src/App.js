import React from 'react';
import A from './components/A';
import Box from './components/Box';
import VegItem from './components/VegItem';
import NonVegItem from './components/NonVegItem';


function contextDemo() {
  return (
    <div>
      {/* <h5>component's context</h5> */}
      {
        /* 
        <A color="red"/>
        <A color="blue"/>
        <A color="green"/> 
        */
      }
    </div>
  )
}

function containerComponentDemo() {
  return (
    <div>

    {/* <h5>container-component(s)</h5> */}

    {
      /* 
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
      
      */
     }

    </div>
  )
}

function App() {
  return (
    <div className="container">
      <hr />
      <h1> React Adv concepts</h1>
      <hr />
      {/* {contextDemo()} */}
      {/* {containerComponentDemo()} */}
    </div>
  );
}

export default App;
