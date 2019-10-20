import React, { useState, useEffect } from 'react';

import store from '../store';
 
const Summary = (props) => {
    let [votes, setVotes] = useState({})
    useEffect(() => {
        store.subscribe(() => {
            let votes = store.getState().votes || {};
            setVotes(votes)
        })
    }, [])
    const renderVotes = () => {
        return Object.keys(votes)
            .map((itemId, idx) => {
                let vote = votes[itemId];
                if (vote.up || vote.down)
                    return (
                        <li key={idx}>{itemId} : {vote.up} likes and {vote.down} dislikes</li>
                    )
            })
    }
    return (
        <div className="alert alert-info">
            {renderVotes()}
        </div>
    );
};

export default Summary;