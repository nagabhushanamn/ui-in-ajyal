import React, { Component } from 'react';
import Item from './Item';

class MealBox extends Component {
    state = {
        totalPrice: 0
    }
    incrementTotalPrice() {
        let { totalPrice } = this.state;
        totalPrice++;
        this.setState({ totalPrice })
    }
    render() {
        let { totalPrice } = this.state;
        return (
            <div className="card">
                <div className="card-header">Meal Box : <span className="badge badge-danger">&#8377;{totalPrice}</span></div>
                <div className="card-body">
                    <Item value="Veg" price={100} onBuy={e => this.incrementTotalPrice()} />
                    <Item value="Non-Veg" price={200} onBuy={e => this.incrementTotalPrice()} />
                </div>
            </div>
        );
    }
}

export default MealBox;