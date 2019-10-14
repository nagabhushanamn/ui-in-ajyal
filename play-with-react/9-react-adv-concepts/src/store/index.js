


/*

 store  ==> holds state/data

  - topics
  - comments

*/


export default {
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