import React, { Component } from 'react';
import TopicList from './TopicList';
import CommentList from './CommentList';

class ClassRoom extends Component {
    state = {
        topic: '',
        isEnd: false
    }
    changeTopic(e) {
        let { topic } = e;
        this.setState({ topic })
    }
    render() {
        let { isEnd } = this.state;
        return (
            <div>
                <hr />
                <button onClick={e => this.setState({ isEnd: !this.state.isEnd })} className="btn btn-danger">{isEnd ? 'start' : 'end'}</button>
                <hr />
                <div className="card card-body bg-info">
                    <div className="row">
                        <div className="col-md-6">
                            {isEnd ? null : <TopicList onChange={e => this.changeTopic(e)} />}
                        </div>
                        <div className="col-md-6">
                            {isEnd ? null : <CommentList topic={this.state.topic} />}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ClassRoom;