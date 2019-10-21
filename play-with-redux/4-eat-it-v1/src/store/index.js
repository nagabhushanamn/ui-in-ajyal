
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// ---------------------------------------------------
// step-1 : identify state/data that makes dynamic UI
// ---------------------------------------------------

//  - items
//  - reviews
//  - cart
//  - orders
//  - user



// ---------------------------------------------------
// step-2 : identify actions/operations/events which mutate state
// ---------------------------------------------------

const LOAD_ITEMS = "LOAD_ITEMS"

const LOAD_REVIEWS = 'LOAD_REVIEWS';
const ADD_NEW_REVIEW = 'ADD_NEW_REVIEW';


// ---------------------------------------------------
// step-3 : process action(s) using function / reducer to make new-state
// ---------------------------------------------------

function itemsReducer(state = [], action) {
    switch (action.type) {
        case LOAD_ITEMS: {
            let { items } = action;
            return [...state, ...items];
        }
        default: return state;
    }
}
/*
// existing state, e.g if user loading reviews of dessert
{
    'veg':[
        {},{}
    ],
    'non-veg':[
        {},{}
    ],
    'dessert':[]
}
*/
function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_REVIEWS: {
            let { reviews, itemId } = action;
            return { ...state, [itemId]: reviews }
        }
        default: return state;
    }
}

// combine all reducer(s) 

const rootReducer = combineReducers({
    items: itemsReducer,
    reviews: reviewsReducer
});

// ---------------------------------------------------
// step-4 : keep all UI state in one-place / store
// ---------------------------------------------------

// createStore(rootReducer,intialState);

const store = createStore(rootReducer, composeWithDevTools(
    // other store enhancers if any
));

export default store;