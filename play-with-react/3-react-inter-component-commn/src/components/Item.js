import React, { Component } from 'react';
import './Item.css'
import 'font-awesome/css/font-awesome.css'

class Item extends Component {
    state = {
        itemQty: 0
    }
    incrementQty() {
        let { itemQty } = this.state;
        itemQty++
        this.setState({ itemQty })
        let { onBuy } = this.props;
        if (onBuy) {
            let event = { price: this.props.price };
            onBuy(event); // 
        }
    }
    decrementQty() {
        let { itemQty } = this.state;
        itemQty--
        this.setState({ itemQty })
        let { onBuy } = this.props;
        if (onBuy) {
            let event = { price: -this.props.price };
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
                    <div className="item-btn">
                        <button onClick={e => this.incrementQty(e)}
                            className="btn btn-warning">
                            <i className="fa fa-plus"></i>
                        </button>
                        <button disabled={itemQty === 0} onClick={e => this.decrementQty(e)}
                            className="btn btn-warning">
                            <i className="fa fa-minus"></i>
                        </button>
                    </div>
                    <hr />
                    <span className="badge badge-dark">{itemQty}</span>
                </div>
            </div>
        );
    }
}

export default Item;