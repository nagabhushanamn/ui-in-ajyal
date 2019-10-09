import React from 'react';

let total = 0.0;

function renderCartItems(cart) {
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
                <td>{cartLine.itemQty}</td>
                <td>&#8377;{item.price * cartLine.itemQty}</td>
            </tr>
        )
    })
}

const CartView = (props) => {
    let { cart } = props
    return (
        <div className="card">
            <div className="card-header">Item(s) in cart</div>
            <div className="card-body">
                <table className="table table-bordered table-sm">
                    <tbody>
                        {renderCartItems(cart)}
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