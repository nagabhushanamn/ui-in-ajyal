
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'
import Greet from './Greet';

class App extends Component {
  state = {
    message: 'welcome'
  }
  changeMessage(message) {
    this.setState({ message })
  }
  render() {
    console.log("App :: render()")
    // let title=this.props.title;
    // let trainer=this.props.trainer;
    // or
    let { title, author } = this.props; // de-structuring
    return (
      <div className="container">
        <hr />
        <h1>
          {title} &nbsp;
          by <small><span className="badge badge-dark">{author}</span></small>
        </h1>
        <hr />
        <button onClick={e => this.changeMessage("hello")} className="btn btn-danger">english</button>&nbsp;
        <button onClick={e => this.changeMessage("مرحبا")} className="btn btn-danger">arabic</button>&nbsp;
        <button onClick={e => this.changeMessage("வணக்கம்")} className="btn btn-danger">tamil</button>&nbsp;
        <hr />
        <Greet message={this.state.message} />
      </div>
    )
  }
}
App.defaultProps = {
  //title: 'Unknown',
  author: 'Anonymous'
}
App.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string
}

export default App;