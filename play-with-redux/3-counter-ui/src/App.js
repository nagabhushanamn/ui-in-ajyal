import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import { connect } from 'react-redux'

function App({ count, increment, decrement }) {
  return (
    <div className="container">
      <hr />
      <h1> counter-ui : react with redux</h1>
      <hr />
      <button className="btn btn-dark" onClick={e => increment(10)} > +10</button>
      &nbsp;
      <button className="btn btn-danger" onClick={e => decrement(10)} > -10</button>
      <hr />
      {count}
      <hr />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state
  }
}

let increment = (value) => { return { type: "INCREMENT", value } }
let decrement = (value) => { return { type: "DECREMENT", value } }
const mapDispathToProps = { increment, decrement }

export default connect(mapStateToProps, mapDispathToProps)(App);
