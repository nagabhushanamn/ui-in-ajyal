import React  from 'react';


import { connect } from 'react-redux';

const Summary = ({ votes }) => {
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

function mapStateToProps(state) {
    return {
        votes: state.votes
    }
}
export default connect(mapStateToProps)(Summary);