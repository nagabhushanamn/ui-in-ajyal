import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    questions: [
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
    ]
  }
  render() {
    let { questions } = this.state;
    let question = questions[0];
    return (
      <div className="container">
        <hr />
        <h1>online exam</h1>
        <hr />

        <div className="card card-body">
          <div id="question-box">
            <span class="badge badge-dark">Q. {question.number} / {questions.length}</span>
            <div id="question">{question.q}</div>
          </div>
          <hr />
          <ul id="options-box">
            {
              question.options.map(option => {
                let optionTemplate =
                  <li class="list-group-item bg-light">
                    <input name="q-option" type="radio" value="{option}" /> &nbsp; {option}
                  </li>
                return optionTemplate;
              })
            }
          </ul>
        </div>
        
      </div>
    )
  }
}

export default App;
