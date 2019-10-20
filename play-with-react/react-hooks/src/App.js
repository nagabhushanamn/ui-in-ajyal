import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';

function App() {
  let [isRequired, setRequired] = useState(true)
  return (
    <div className="container">
      <hr />
      <h1> react hooks </h1>
      <hr />
      <button onClick={e => setRequired(false)}>remove counter</button>
      {isRequired ? <Counter /> : null}
    </div>
  );
}

export default App;
