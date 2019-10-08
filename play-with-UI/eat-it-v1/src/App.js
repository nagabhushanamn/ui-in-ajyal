import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  state = {
    currentTab: 1,
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
  changeTab(e, tabIndex) {
    e.preventDefault();
    this.setState({ currentTab: tabIndex })// state change..
  }
  renderTabPanel(item) {
    let currentTab = this.state.currentTab;
    switch (currentTab) {
      case 1: return (<div>{item.description}</div>)
      case 2: return (<div>{"Not Yet"}</div>)
      case 3: return (<div>{"None Yet"}</div>)
      default: return null;
    }
  }
  renderItems(items) {
    let currentTab = this.state.currentTab
    return items.map(item => {
      return (
        <div className="list-group-item" key={item.id}>
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <img alt={item.name + " burger image"} src={item.imgPath} className="img-fluid" />
            </div>
            <div className="col-sm-9 col-md-9">
              <h5>{item.name}</h5>
              <h6><span>&#8377;</span>{item.price}</h6>
              <button className="btn btn-dark btn-sm">buy</button>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 1)} className={currentTab === 1 ? 'nav-link active' : 'nav-link'} href="/">Description</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 2)} className={currentTab === 2 ? 'nav-link active' : 'nav-link'} href="/">Ingre..</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 3)} className={currentTab === 3 ? 'nav-link active' : 'nav-link'} href="/">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(item)}
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
