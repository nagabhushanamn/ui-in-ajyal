import React, { Component } from 'react';
import store from '../store';


class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    } 
    componentDidMount() {
        console.log("CommentList :: componentDidMount()");
        this.unsubscibe = store.subscibe(() => {
            let { topic } = this.props;
            let comments = store.getState().comments[topic] || [];
            this.setState({ comments })
        });
    }
    componentWillUnmount() {
        console.log("CommentList :: componentWillUnmount")
        this.unsubscibe();
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
    renderComments() {
        let { comments } = this.state;
        return comments.map((comment, idx) => {
            return (<li key={idx}
                className="list-group-item">{comment}</li>)
        })
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
