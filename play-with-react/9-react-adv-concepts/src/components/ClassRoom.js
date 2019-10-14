import React, { Component } from 'react';
import TopicList from './TopicList';
import CommentList from './CommentList';

class ClassRoom extends Component {
    state = {
        topic: ''
    }
    changeTopic(e) {
        let { topic } = e;
        this.setState({ topic })
    }
    render() {
        return (
            <div className="card card-body bg-info">
                <div className="row">
                    <div className="col-md-6">
                        <TopicList onChange={e => this.changeTopic(e)} />
                    </div>
                    <div className="col-md-6">
                        <CommentList topic={this.state.topic} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassRoom;