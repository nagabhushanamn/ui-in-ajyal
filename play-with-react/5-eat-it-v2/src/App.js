

import React, { Component } from 'react';
import Item from './components/Item';
import Navbar from './components/Navbar';

class App extends Component {

  // data / state / model
  state = {
    items: [
      {
        id: 1,
        name: 'Veg',
        price: 100.00,
        canBuy: true,
        imgPath: 'images/veg.png',
        description: 'veg is healthy'
      },
      {
        id: 2,
        name: 'Non-Veg',
        price: 200.00,
        canBuy: true,
        imgPath: 'images/non-veg.png',
        description: 'non-veg is yummy , not healthy always'
      },
    ]
  }
  renderItems() {
    let { items } = this.state;
    return items.map((item) => {
      return (
        <div key={item.id} className="list-group-item">
          <Item value={item} />
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <Navbar title="eat-IT" />
        <hr />
        <hr />
        <div className="container">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default App;