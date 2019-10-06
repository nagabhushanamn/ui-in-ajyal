
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
    },
    {
        number: 3,
        q: 'what is tomo?',
        options: [
            "javascript",
            "react.js",
            "none"
        ],
        answer: 'none'
    }
]
let question = questions[0];




let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')
let endBtn = document.getElementById('end')


function renderNextOrPevQuestion(question) {
    let qTemplate = `
        <div id="question-box">
            <span class="badge badge-dark">Q. ${question.number} / ${questions.length}</span>
            <div id="question">${question.q}</div>
        </div>
        <hr />
        <ul id="options-box">
            ${question.options.map(option => {
        return `
                <li class="list-group-item bg-light">
                <input name="answer" type="radio" value="${option}" /> &nbsp; ${option}
                </li>`
    }).join(" ")}
        </ul>
        `;
    return qTemplate;
}

let idx = 0;
document.getElementById('box').innerHTML = renderNextOrPevQuestion(questions[0]);
prevBtn.disabled = true;
nextBtn.addEventListener('click', e => {
    idx++;
    document.getElementById('box').innerHTML = renderNextOrPevQuestion(questions[idx]);
    if (idx === questions.length - 1) {
        nextBtn.disabled = true
    }
    if (idx !== 0) {
        prevBtn.disabled = false
    }
})
prevBtn.addEventListener('click', e => {
    idx--;
    document.getElementById('box').innerHTML = renderNextOrPevQuestion(questions[idx]);
    if (idx == 0) {
        prevBtn.disabled = true
    }
    if (idx !== questions.length - 1) {
        nextBtn.disabled = false
    }
})
