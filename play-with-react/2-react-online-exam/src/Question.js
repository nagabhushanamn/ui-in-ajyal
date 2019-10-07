import React, { Component } from 'react';

class Question extends Component {
    render() {
        let { value: question, total } = this.props;
        return (
            <div>
                <div className="card card-body">
                    <div id="question-box">
                        <span class="badge badge-dark">Q. {question.number} / {total}</span>
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
        );
    }
}

export default Question;