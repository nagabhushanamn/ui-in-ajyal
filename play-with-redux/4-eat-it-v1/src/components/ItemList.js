import React, { useState, useEffect } from 'react';
import Item from './Item';

// import store from '../store'

import { connect } from 'react-redux';

const loadItems = () => {
    let items = [
        {
            id: 1,
            name: 'Item-1',
            description: 'sample item',
            imgPath: 'images/veg.png',
            price: 10
        }
    ]
    let action = { type: 'LOAD_ITEMS', items }
    return action;
}

const ItemList = ({ items, loadItems }) => {

    useEffect(() => {
        //---------------------------
        // way-1 : react only
        //---------------------------
        // let items = [{ name: 'Item-1', price: 10 }, { name: 'item-2', price: 20 }]
        // setItems(items);

        //---------------------------
        // way-2 : react + redux  manual binding
        //---------------------------
        // store.subscribe(() => {
        //     let items = store.getState().items;
        //     setItems(items);
        // })
        // let items = [{ name: 'Item-1', price: 10 }, { name: 'item-2', price: 20 }]
        // let action = { type: 'LOAD_ITEMS', items }

        // store.dispatch(action)

        //
        //---------------------------
        // way-3 : react + redux   binding with HOF e.g connect
        //---------------------------
        loadItems();

    }, []);

    const renderItems = () => {
        return items.map((item) => {
            return (
                <div key={item.id} className="list-group-item">
                    <Item item={item} itemQty={0} onBuy={e => { }} />
                </div>
            )
        })
    }
    return (
        <div>
            {renderItems()}
        </div>
    );
};

// export default ItemList;


//--------------------------------------------------------------------
const mapStateToProps = state => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = { loadItems }

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)

//--------------------------------------------------------------------