import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MealBox from './components/MealBox';


function App() {
  return (
    <div className="container">
      <hr />
      <h1>react - inter component communication</h1>
      <hr />
      <MealBox />
    </div>
  );
}

export default App;
