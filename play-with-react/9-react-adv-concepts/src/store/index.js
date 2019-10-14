// store ==> state

/*
    -> topics
    -> comments
*/

let store = {
    listeners: [],
    subscribe: function (listener) {
        this.listeners.push(listener)
    },
    state: {
        topics: [
            "HTML",
            "CSS",
            "JAVASCIPT",
            "REACT",
            "REDUX",
        ],
        comments: {
            "HTML": [
                "this is easy",
                "no coding",
                "just tags"
            ],
            "CSS": [
                "i love makup",
                "its like how i do makuu evey day"
            ],
            "javascipt": [
                "i hate from here",
                "Nag teaching too much in this"
            ]
        }
    },
    getState() {
        return this.state;
    }
}



//-------------------------------------------------------------------------------------------
let idx = 0;
setInterval(() => {
    idx++;
    let newState = { ...store.state, topics: [...store.state.topics, 'new-topic' + idx] }
    store.state = newState;
    console.log("New topic added");
    console.log(store.state);
    store.listeners.forEach(listener => {
        listener();  // noti..
    })

}, 10 * 1000);

//-------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------
let commentIdx = 0;
setInterval(() => {
    commentIdx++;
    let newState = { ...store.state, comments: { ...store.state.comments, "HTML": [...store.state.comments['HTML'], 'New comment-' + commentIdx] } }
    store.state = newState;
    console.log("New comment added to HTML topic");
    console.log(store.state);
    store.listeners.forEach(listener => {
        listener();  // noti..
    })

}, 5 * 1000);

//-------------------------------------------------------------------------------------------



export default store;