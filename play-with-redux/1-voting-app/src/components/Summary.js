import React, { useEffect, useState } from 'react';

import store from '../store'

const Summary = (props) => {
    let [votes, setVotes] = useState({ dog: { up: 0, down: 0 }, cat: { up: 0, down: 0 } })
    useEffect(() => {
        store.subscribe(() => {
            let votes = store.getState().votes;
            setVotes(votes)
        })
    }, [])
    return (
        <div className="card card-body bg-warning">
            DOG :
            <span><i className="fa fa-thumbs-up"></i>  {votes.dog.up}</span>
            <span><i className="fa fa-thumbs-down"></i>  {votes.dog.down}</span>
            <hr/>
            CAT :
            <i className="fa fa-thumbs-up"></i>  {votes.cat.up}
            &nbsp;
            <i className="fa fa-thumbs-down"></i>  {votes.cat.down}
        </div>
    );
};

export default Summary;