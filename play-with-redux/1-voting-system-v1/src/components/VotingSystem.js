import React, { useState, useEffect } from 'react';

import store from '../store'
import Item from './Item';
import Summary from './Summary';

const VotingSystem = (props) => {
    let [totalVotes, setTotalVotes] = useState(0)
    useEffect(() => {
        store.subscribe(() => {
            let totalVotes = store.getState().votes.totalVotes;
            setTotalVotes(totalVotes)
        })
    }, [])
    return (
        <div>
            <hr />
            Total Votes : <span className="badge badge-dark">{totalVotes}</span>
            <hr />

            <ul>
                {
                    ['cat', 'dog']
                        .map((item, idx) => {
                            return (<li key={idx} className="list-group-item"><Item value={item} /></li>)
                        })
                }
            </ul>

            <hr/>

            <Summary/>

        </div>
    );
};

export default VotingSystem;