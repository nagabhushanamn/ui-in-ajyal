import React from 'react';
import './Animal.css'

import store from '../store'

const Animal = (props) => {
    let { value } = props;
    const handleVote = (type) => {
        let action = { type, animal: value.toUpperCase() }
        store.dispatch(action)
    }
    return (
        <div className="card card-body bg-info">
            <div className="animal">
                {value}
                <i className="fa fa-thumbs-up" onClick={e => handleVote('UP_VOTE')}></i>&nbsp;
                <i className="fa fa-thumbs-down" onClick={e => handleVote('DOWN_VOTE')}></i>
            </div>
        </div>
    );
};

export default Animal;