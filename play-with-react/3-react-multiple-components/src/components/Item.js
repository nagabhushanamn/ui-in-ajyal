import React, { Component } from 'react';
import './Item.css'

class Item extends Component {
    state = {
        itemQty: 0
    }
    incrementVote() {
        let { itemQty } = this.state;
        itemQty++
        this.setState({ itemQty })
        let { onBuy } = this.props;
        if (onBuy) {
            let event = {};
            onBuy(event); // 
        }
    }
    render() {
        let { value, price } = this.props;
        let { itemQty } = this.state;
        return (
            <div className="item">
                <div className="card card-body">
                    <h5>{value} - <small>&#8377;{price}</small></h5>
                    <hr />
                    <button onClick={e => this.incrementVote(e)}
                        className="btn btn-warning">
                        buy
                    </button>
                    <hr />
                    <span className="badge badge-dark">{itemQty}</span>
                </div>
            </div>
        );
    }
}

export default Item;