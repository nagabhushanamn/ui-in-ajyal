
import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';


// -------------------------------------------
// step-1 : identify state that reperesent UI
// -------------------------------------------

// - votes

// -------------------------------------------
// step-2 : identify action which cause state chane
// -------------------------------------------

// - UP_VOTE  {type,animal}
// - DOWN_VOTE

// -------------------------------------------
// step-3 :define 'reducer' to  process action & return new state
// -------------------------------------------

const votesReducer = function (state = {}, action) {
    let { type } = action;
    console.log('-vote reducer-')
    switch (type) {
        case 'UP_VOTE': {
            let { animal } = action;
            if (animal === "DOG") {
                const newState = {
                    ...state, dog: { ...state.dog, up: state.dog.up + 1 }
                }
                return newState;
            }
            if (animal === "CAT") {
                const newState = {
                    ...state, cat: { ...state.cat, up: state.cat.up + 1 }
                }
                return newState;
            }
        }
        case 'DOWN_VOTE': {
            let { animal } = action;
            if (animal === "DOG") {
                const newState = {
                    ...state, dog: { ...state.dog, down: state.dog.down + 1 }
                }
                return newState;
            }
            if (animal === "CAT") {
                const newState = {
                    ...state, cat: { ...state.cat, down: state.cat.down + 1 }
                }
                return newState;
            }
        }
        default: return state;
    }
}


const rootReducer = combineReducers({
    votes: votesReducer
})


// -------------------------------------------
// step-4 : create store  with initial state & reducer
// -------------------------------------------

const initialState = {
    votes: {
        dog: {
            up: 0,
            down: 0
        },
        cat: {
            up: 0,
            down: 0
        }
    }
}

const store = createStore(rootReducer, initialState, devToolsEnhancer(
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));


export default store;


