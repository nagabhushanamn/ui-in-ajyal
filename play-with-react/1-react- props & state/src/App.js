
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'
import Greet from './Greet';

class App extends Component {
  // state = {
  //   message: 'welcome'
  // }
  constructor(props) {
    super();
    console.log("App :: constructor()");
    //console.dir(props)
    this.state = {
      message: 'welcome ' + props.author
    }
  }
  changeMessage(message) {
    this.setState({ message })//
    this.setState({ message:"ha ha" })// 
  }
  render() {
    console.log("App :: render()")
    // let title=this.props.title;
    // let trainer=this.props.trainer;
    // or
    let { title, author } = this.props; // de-structuring

    // this.props.title=""; // error

    return (
      <div className="container">
        <hr />
        <h1>
          {title} &nbsp;
          by <small><span className="badge badge-dark">{author}</span></small>
        </h1>
        <hr />
        <button onClick={e => this.changeMessage("hello")} className="btn btn-dark">english</button>&nbsp;
        <button onClick={e => this.changeMessage("مرحبا")} className="btn btn-dark">arabic</button>&nbsp;
        <button onClick={e => this.changeMessage("வணக்கம்")} className="btn btn-dark">tamil</button>&nbsp;
        <button onClick={e => this.changeMessage("")} className="btn btn-danger">remove greet</button>&nbsp;
        <hr />
        {this.state.message ? <Greet message={this.state.message} /> : null}
      </div>
    )
  }

  componentDidMount() {
    console.log("App :: componentDidMount()")
  }
  componentDidUpdate() {
    console.log("App :: componentDidUpdate()")
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