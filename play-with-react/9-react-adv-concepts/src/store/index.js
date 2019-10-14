


/*

 store  ==> holds state/data

  - topics
  - comments

*/

let listeners = [];

const store = {
    subscibe(f) {
        listeners.push(f)
        let idx = listeners.length;
        return function () {
            delete listeners[idx-1]
        }
    },
    state: {
        topics: [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "REACT"
        ],
        comments: {
            "HTML": [
                "i love it ",
                "just tags"
            ],
            "CSS": [
                "i love makeup"
            ],
            "JAVASCRIPT": [
                "best language"
            ],
            "REACT": [
                "good , if we u now it"
            ]
        }
    },
    getState() {
        return this.state;
    }
}


//----------------------------------------------------------

// let i = 0;
// setInterval(() => {
//     i++;
//     let newTopic = "New Topic : " + i;
//     let state = store.getState();
//     let newState = { ...state, topics: [...state.topics, newTopic] }
//     store.state = newState;
//     console.log("new topic published...")
//     console.log(store.getState().topics)
//     listeners.forEach(listener => {
//         listener();
//     })
// }, 3000)

//----------------------------------------------------------

//----------------------------------------------------------

let j = 0;
setInterval(() => {
    j++;
    let newComment = "New comment : " + j;
    let state = store.getState();
    let newState = { ...state, comments: { ...state.comments, ['HTML']: [...state.comments['HTML'], newComment] } }
    store.state = newState;
    // console.log("new comment published...")
    // console.log(store.getState().comments['HTML'])
    listeners.forEach(listener => {
        if (listener)
            listener();
    })
}, 2000)

//----------------------------------------------------------



export default store;