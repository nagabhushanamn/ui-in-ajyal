import React, { Component } from 'react';
import store from '../store';


class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    renderComments() {
        let { comments } = this.state;
        return comments.map((comment, idx) => {
            return (<li key={idx}
                className="list-group-item">{comment}</li>)
        })
    }
    componentDidMount() {
        console.log("CommentList :: componentDidMount()");
    }
    componentDidUpdate(prevProps) {
        console.log("CommentList :: componentDidUpdate()");
        console.log(prevProps)
        console.log(this.props)
        if (this.props.topic !== prevProps.topic) {
            let comments = store.getState().comments[this.props.topic]
            this.setState({ comments })
        }
    }
    render() {
        let { comments } = this.state;
        if (comments.length === 0)
            return (
                <div className="card card-body">select any topic</div>
            )
        else
            return (
                <div className="card card-body">
                    <ul>{this.renderComments()}</ul>
                </div>
            );
    }
}

export default CommentList;
