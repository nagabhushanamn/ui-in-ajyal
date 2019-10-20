import React from 'react';

// import store from '../store'
import Item from './Item';
import Summary from './Summary';

import { connect } from 'react-redux'

const VotingSystem = ({ totalVotes }) => {
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

            <hr />

            <Summary />

        </div>
    );
};

// export default VotingSystem;

function mapStateToProps(state) {
    return {
        totalVotes: state.votes.totalVotes
    }
}
export default connect(mapStateToProps)(VotingSystem)