import React, { Component } from 'react';
import Item from './Item';

class MealBox extends Component {
    state = {
        totalPrice: 0
    }
    calculateTotalPrice(e) {
        let { totalPrice } = this.state;
        totalPrice += e.price;
        this.setState({ totalPrice })
    }
    render() {
        let { totalPrice } = this.state;
        return (
            <div className="card">
                <div className="card-header">Meal Box : <span className="badge badge-danger">&#8377;{totalPrice}</span></div>
                <div className="card-body">
                    <Item value="Veg" price={100} onBuy={e => this.calculateTotalPrice(e)} />
                    <Item value="Non-Veg" price={200} onBuy={e => this.calculateTotalPrice(e)} />
                </div>
            </div>
        );
    }
}

export default MealBox;