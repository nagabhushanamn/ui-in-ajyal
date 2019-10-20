import React, { useEffect, useState } from 'react';
import store from '../store';
 
const Item = ({ value }) => {
    let [itemVotes, setItemVotes] = useState({ up: 0, down: 0 })
    useEffect(() => {
        store.subscribe(() => {
            let itemVotes = store.getState().votes[value] || { up: 0, down: 0 };
            setItemVotes(itemVotes)
        })
    }, [])

    const handleVote = (type) => {
        let action = { type, itemId: value }
        store.dispatch(action)
    }

    return (
        <div>
            {value}
            <hr />
            <i className="fa fa-thumbs-up" onClick={e => handleVote('UP_VOTE')}></i> {itemVotes.up}
            &nbsp;&nbsp;
            <i className="fa fa-thumbs-down" onClick={e => handleVote('DOWN_VOTE')}></i> {itemVotes.down}
        </div>
    );
};

export default Item;