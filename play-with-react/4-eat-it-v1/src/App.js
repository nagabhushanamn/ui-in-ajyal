

import React, { Component } from 'react';

class App extends Component {

  // data / state / model

  state = {
    currentTab: 1,
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

  changeTab(tabIndex, e) {
    e.preventDefault();
    this.setState({ currentTab: tabIndex })
  }

  renderTabPanel(item) {
    let { currentTab } = this.state;
    switch (currentTab) {
      case 1: return (<div>{item.description}</div>)
      case 2: return (<div>{"chef on holiday.."}</div>)
      case 3: return (<div>{"None yet"}</div>)
      default: return null;
    }
  }
  renderItems() {
    let { items, currentTab } = this.state;
    return items.map((item) => {
      return (
        <div key={item.id} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img className="img-fluid" alt={item.name} src={item.imgPath} />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <div>
                <h5>{item.name}</h5>
                <h6>&#8377;{item.price}</h6>
                <button disabled={!item.canBuy} className="btn btn-sm btn-dark">buy</button>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a onClick={e => this.changeTab(1, e)} className={currentTab === 1 ? 'nav-link active' : 'nav-link'} href="/">description</a>
                  </li>
                  <li className="nav-item">
                    <a onClick={e => this.changeTab(2, e)} className={currentTab === 2 ? 'nav-link active' : 'nav-link'} href="/">ingre..</a>
                  </li>
                  <li className="nav-item">
                    <a onClick={e => this.changeTab(3, e)} className={currentTab === 3 ? 'nav-link active' : 'nav-link'} href="/">reviews</a>
                  </li>
                </ul>
                {this.renderTabPanel(item)}
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat-IT</a>
        </nav>
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