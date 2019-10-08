import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Question from './Question';

class App extends React.Component {
  
  state = {
    currentQuesIdx: 0,
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

  nextHandler() {
    let { currentQuesIdx } = this.state;
    this.setState({ currentQuesIdx: ++currentQuesIdx })
  }
  prevHandler() {
    let { currentQuesIdx } = this.state;
    this.setState({ currentQuesIdx: --currentQuesIdx })
  }

  render() {
    let { questions, currentQuesIdx } = this.state;
    let question = questions[currentQuesIdx];
    return (
      <div className="container">
        <hr />
        <h1>online exam</h1>
        <hr />
        <Question value={question} total={questions.length}/>
        <hr />
        <button disabled={currentQuesIdx === 0} onClick={e => this.prevHandler()} className="btn btn-dark">Prev</button>&nbsp;
        <button disabled={currentQuesIdx === (questions.length - 1)} onClick={e => this.nextHandler()} className="btn btn-dark">Next</button>
        <hr />
      </div>
    )
  }
}

export default App;
