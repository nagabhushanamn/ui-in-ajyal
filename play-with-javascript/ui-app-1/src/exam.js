

let questions = [
    {
        number: 1,
        q: 'what is capital of UAE?',
        options: [
            "dubai",
            "abu dhabi",
            "sharjah",
            "none"
        ],
        answer: 'abu dhabi'
    },
    {
        number: 2,
        q: 'what is lunch?',
        options: [
            "veg",
            "non-veg",
            "none"
        ],
        answer: 'none'
    }
]

let question = questions[0];

let qTemplate = `
    <div id="question-box">
        <span class="badge badge-dark">Q.${question.number}</span>
        <div id="question">${question.q}</div>
    </div>
    <hr />
    <ul id="options-box">
        ${question.options.map(option => {
            return `<li className="list-goup-item"><input type="radio" value="${option}" /> &nbsp; ${option}</li>`
        }).join(" ")}
    </ul>
`

document.getElementById('box').innerHTML = qTemplate;
