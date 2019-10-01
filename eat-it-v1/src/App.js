import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  state = {
    item: {
      id: 1,
      name: 'Veg',
      price: 34,
      imgPath: 'images/veg.png',
      description: 'veg is yummy'
    }
  }

  render() {
    let item = this.state.item;
    return (
      <div>
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat IT</a>
        </nav>
        <hr />
        <hr />
        <div className="container">
          <div className="list-group-item">
            <div className="row">
              <div className="col-sm-3 col-md-3">
                <img src={item.imgPath} className="img-fluid" />
              </div>
              <div className="col-sm-9 col-md-9">
                <h5>{item.name}</h5>
                <h6>{item.price}-AED  </h6>
                <div>{item.description}</div>
                <button className="btn btn-dark btn-sm">buy</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default App;
