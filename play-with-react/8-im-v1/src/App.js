import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';


function App() {
  return (
    <div className="container">
      <hr />
      <h1> IM - app</h1>
      <hr />
      <Router>
        <div className="row">
          <div className="col-md-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="all">View All</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="new">Add New</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <Route path="/all" component={ItemList} />
            <Route path="/new" component={ItemForm} />
          </div>
        </div>
      </Router>

    </div>
  );
}

export default App;
