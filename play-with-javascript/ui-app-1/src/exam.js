
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

let idx = 0;
let userAnswers = {}
let report = {};


let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')
let endBtn = document.getElementById('end')


function getQuestion(question) {
    let qTemplate = `
        <div id="question-box">
            <span class="badge badge-dark">Q. ${question.number} / ${questions.length}</span>
            <div id="question">${question.q}</div>
        </div>
        <hr />
        <ul id="options-box">
            ${
                question.options.map(option => {
                let optionTemplate = `
                        <li class="list-group-item bg-light">
                            <input name="q-option" type="radio" value="${option}" /> &nbsp; ${option}
                        </li>`
                return optionTemplate;          
                }).join(" ")
            }
        </ul>
        `;
    return qTemplate;
}


function recordAns(e) {
    userAnswers[questions[idx].number] = e.target.value;
    console.log(userAnswers);
}

function renderQuestion() {
    document.getElementById('box').innerHTML = getQuestion(questions[idx]);
    document.getElementsByName('q-option')
        .forEach(answerEle => {
            answerEle.addEventListener('click', recordAns)
        })
}

renderQuestion();
prevBtn.disabled = true;
nextBtn.addEventListener('click', e => {
    idx++;
    renderQuestion();
    if (idx === questions.length - 1) {
        nextBtn.disabled = true
    }
    if (idx !== 0) {
        prevBtn.disabled = false
    }
})
prevBtn.addEventListener('click', e => {
    idx--;
    renderQuestion();
    if (idx == 0) {
        prevBtn.disabled = true
    }
    if (idx !== questions.length - 1) {
        nextBtn.disabled = false
    }
})
endBtn.addEventListener('click', e => {
    for (let q of questions) {
        let userAns = userAnswers[q.number];
        if (userAns === q.answer) {
            report[q.number] = "correct"
        } else {
            report[q.number] = "incorrect"
        }
    }
    console.log(report)
})