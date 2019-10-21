

import React, { useState, useEffect } from 'react';
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
import ItemList from './components/ItemList';

const App = (props) => {

  let [cart, setCart] = useState({})
  let [cartQty, setCartQty] = useState(0)


  useEffect(() => {
    let text = localStorage.getItem('my-cart');
    let cart = JSON.parse(text) || [];
    setCart(cart)
  }, [])

  useEffect(() => {
    localStorage.setItem("my-cart", JSON.stringify(cart))
  })


  const addToCart = (e) => {
    let { item, qty } = e;
    qty = qty || 1;
    let { id } = item;
    let cartLine = cart[id];
    if (!cartLine) {
      cartLine = { item, itemQty: 1 }
    } else {
      cartLine = { ...cartLine, itemQty: cartLine.itemQty + qty }
    }
    if (cartLine.itemQty === 0) {
      delete cart[id]
    } else {
      cart = { ...cart, [id]: cartLine }
    }

    let cartQty = Object.keys(cart).length
    setCart(cart)
    setCartQty(cartQty)

  }

  const renderCart = () => {
    return <CartView cart={cart} onBuy={e => addToCart(e)} />
  }

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
              <Route path={"/items"} render={() => <ItemList />} />
              <Route path={"/cart"} render={() => renderCart()} />
              <Route path={"/login"} component={Login} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;





