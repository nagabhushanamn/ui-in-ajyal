

import React, { Component } from 'react';
import Item from './components/Item';
import Navbar from './components/Navbar';

class App extends Component {

  // data / state / model
  state = {
    cart: {},
    cartQty: 0,
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
  addToCart(e) {
    let { cart } = this.state;
    let { item } = e;
    let { id } = item;
    let cartLine = cart[id];
    if (!cartLine) {
      cartLine = { item }
      cart = { ...cart, [id]: cartLine }
    }
    cart = { ...cart }
    this.setState({ cart, cartQty: Object.keys(cart).length })
  }
  renderItems() {
    let { items } = this.state;
    return items.map((item) => {
      return (
        <div key={item.id} className="list-group-item">
          <Item value={item} onBuy={e => this.addToCart(e)} />
        </div>
      )
    })
  }

  render() {
    let { cartQty } = this.state;
    return (
      <div>
        <Navbar title="eat-IT" />
        <hr />
        <i className="fa fa-shopping-cart"></i>
        &nbsp;<span className="badge badge-danger">{cartQty}</span>
        &nbsp;item(s) in cart
        <hr />
        <div className="container">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default App;