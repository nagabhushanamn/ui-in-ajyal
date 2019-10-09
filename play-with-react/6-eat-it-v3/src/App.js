

import React, { Component } from 'react';
import Item from './components/Item';
import Navbar from './components/Navbar';
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import NotFound from './components/NotFound';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";


class App extends Component {

  // data / state / model
  state = {
    cart: {},// empty
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

  // state change logic

  toggleCart(e) {
    e.preventDefault();
    this.setState({ isCartOpen: !this.state.isCartOpen })
  }

  addToCart(e) {
    let { cart } = this.state;
    let { item } = e;
    let { id } = item;
    let cartLine = cart[id];
    if (!cartLine) {
      cartLine = { item, itemQty: 1 }
    } else {
      cartLine = { ...cartLine, itemQty: cartLine.itemQty + 1 }
    }
    cart = { ...cart, [id]: cartLine }
    let cartQty = Object.keys(cart).length
    this.setState({ cart, cartQty })
  }

  renderCart() {
    let { cart } = this.state;
    return <CartView cart={cart} />
  }
  renderItems() {
    let { items, cart } = this.state;
    return items.map((item) => {
      let cartLine = cart[item.id] || {}
      let itemQty = cartLine.itemQty || 0;
      return (
        <div key={item.id} className="list-group-item">
          <Item item={item} itemQty={itemQty} onBuy={e => this.addToCart(e)} />
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
        <CartBadge value={cartQty} />
        <hr />
        <Router>
          <div>
            <div className="container">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link className="nav-link" to="/">home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/items">items</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">orders</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">login</Link>
                </li>
              </ul>
            </div>
            <hr />
            <div className="container">
              <Switch>
                <Route exact={true} path={"/"} component={Dashboard} />
                <Route path={"/items"} render={() => this.renderItems()} />
                <Route path={"/cart"} render={() => this.renderCart()} />
                <Route path={"/login"} component={Login} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;