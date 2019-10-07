import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Greet extends Component {
    constructor(props) {
        super();
        console.log("Greet :: constructor()");
        //console.dir(props)
    }
    render() {
        console.log("Greet :: render()");
        return (
            <div>
                <div className="alert alert-info">
                    <div>{this.props.message}</div>
                    <hr />
                    <div>{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai' })}</div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log("Greet :: componentDidMount()");
        this.interval = setInterval(() => {
            this.forceUpdate(); // 
        }, 1000);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Greet :: shouldComponentUpdate()")
        return this.props.message !== nextProps.message;
    }
    componentDidUpdate() {
        console.log("Greet :: componentDidUpdate()")
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("Greet :: componentWillUnmount()")
    }
}
Greet.propTypes = {
    message: PropTypes.string.isRequired
}

export default Greet;