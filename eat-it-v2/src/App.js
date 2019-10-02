import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
import Item from './components/Item'

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
        <Item value={item} key={item.id}/>
      )
    })
  }
  render() {
    let items = this.state.items;
    return (
      <div>
        <Navbar title="eat-IT" />
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
