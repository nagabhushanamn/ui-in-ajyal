

import { createStore } from 'redux';

function countReducer(state = 0, action) {
    console.log(action)
    switch (action.type) {
        case 'INCREMENT': {
            let { value } = action;
            return state + value;
        }
        case 'DECREMENT': {
            let { value } = action;
            return state - value;
        }
        default: return state;
    }
}

const store = createStore(countReducer)

export default store;