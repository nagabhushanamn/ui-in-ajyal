import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  state = {
    items: [
      {
        id: 1,
        name: 'Veg',
        price: 120.00,
        imgPath: 'images/veg.png',
        description: 'veg is yummy'
      },
      {
        id: 2,
        name: 'Non-Veg',
        price: 150.00,
        imgPath: 'images/non-veg.png',
        description: 'non-veg is yummy, not healthy always'
      },
    ]
  }
  renderItems(items) {
    return items.map(item => {
      return (
        <div className="list-group-item">
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <img src={item.imgPath} className="img-fluid" />
            </div>
            <div className="col-sm-9 col-md-9">
              <h5>{item.name}</h5>
              <h6><span>&#x62f;&#x2e;&#x625;&nbsp;</span>{item.price}</h6>
              <div>{item.description}</div>
              <button className="btn btn-dark btn-sm">buy</button>
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    let items = this.state.items;
    return (
      <div>
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat IT</a>
        </nav>
        <hr />
        <hr />
        <div className="container">
          {this.renderItems(items)}
        </div>

      </div>
    );
  }
}
export default App;
