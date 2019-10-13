import React from 'react';

let total = 0.0;

function renderCartItems(cart, onBuy) {
    total = 0.0;
    let keys = Object.keys(cart);
    return keys.map((key, idx) => {
        let cartLine = cart[key];
        let { item } = cartLine;
        total = total + item.price * cartLine.itemQty;
        return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>
                    <span className="badge badge-dark">
                        <i onClick={e => onBuy({ item, qty: -1 })} className="fa fa-minus"></i>
                    </span>
                </td>
                <td>{cartLine.itemQty}</td>
                <td>
                    <span className="badge badge-dark">
                        <i onClick={e => onBuy({ item, qty: 1 })} className="fa fa-plus"></i>
                    </span>
                </td>
                <td>&#8377;{item.price * cartLine.itemQty}</td>
            </tr >
        )
    })
}

const CartView = (props) => {
    let { cart, onBuy } = props
    let keys = Object.keys(cart);
    if (keys.length === 0) {
        return <div> cart is empty</div>
    } else
        return (
            <div className="card">
                <div className="card-header">Item(s) in cart</div>
                <div className="card-body">
                    <table className="table table-bordered table-sm">
                        <tbody>
                            {renderCartItems(cart, onBuy)}
                        </tbody>
                    </table>
                    <hr />
                    Total : &#8377;{total}
                    <hr />
                    <button className="btn btn-dark">checkout</button>
                </div>
            </div>
        );
};

export default CartView;