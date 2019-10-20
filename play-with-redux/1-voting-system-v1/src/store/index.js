
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// ----------------------------------------------
// step-1 : identify state
// ----------------------------------------------

const initialState = {
    votes: {
        totalVotes: 0,
        mostPopular: 'item'
    }
}


// ----------------------------------------------
//  step-2 : identify actions
// ----------------------------------------------

const UP_VOTE = "UP_VOTE"
const DOWN_VOTE = "DOWN_VOTE"


// ----------------------------------------------
//  step-3 : process action(s) by reducer
// ----------------------------------------------

function votesReducer(state = {}, action) {
    let { type } = action;
    switch (type) {
        case UP_VOTE: {
            let { itemId } = action; // e.g item1
            let itemVote = state[itemId] || { up: 0, down: 0 }
            return {
                ...state,
                totalVotes: state.totalVotes + 1,
                [itemId]: {
                    ...itemVote, up: itemVote.up + 1
                }
            }
        }
        case DOWN_VOTE: {
            let { itemId } = action; // e.g item2
            let itemVote = state[itemId] || { up: 0, down: 0 }
            return {
                ...state,
                totalVotes: state.totalVotes + 1,
                [itemId]: {
                    ...itemVote,
                    down: itemVote.down + 1
                }
            }
        }
        default: return state;
    }
}



const rootReducer = combineReducers({
    votes: votesReducer
});



// ----------------------------------------------
//  step-4 : create store with root reducer
// ----------------------------------------------

const store = createStore(rootReducer, initialState, composeWithDevTools(
    // other store enhancers if any
))

export default store;