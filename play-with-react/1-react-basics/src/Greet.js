import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Greet extends Component {
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
}
Greet.propTypes = {
    message: PropTypes.string.isRequired
}

export default Greet;