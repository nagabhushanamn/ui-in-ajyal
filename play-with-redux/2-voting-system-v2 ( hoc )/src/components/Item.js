import React from 'react';

import { connect } from 'react-redux'

const handleVote = (type, value) => {
    let action = { type, itemId: value }
    return action;
}


const Item = ({ value, itemVotes, handleVote }) => {
    return (
        <div>
            {value}
            <hr />
            <i className="fa fa-thumbs-up" onClick={e => handleVote('UP_VOTE', value)}></i> {itemVotes.up}
            &nbsp;&nbsp;
            <i className="fa fa-thumbs-down" onClick={e => handleVote('DOWN_VOTE', value)}></i> {itemVotes.down}
        </div>
    );
};

function mapStateToProps(state, props) {
    let { value } = props;
    return {
        itemVotes: state.votes[value] || { up: 0, down: 0 }
    }
}

const mapDispatchToProps = { handleVote }

export default connect(mapStateToProps, mapDispatchToProps)(Item);