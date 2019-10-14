import React, { Component } from 'react';

import store from '../store'

class TopicList extends Component {
    constructor() {
        super();
        this.state = {
            topics: store.getState().topics,
            topic: ''
        }
    }
    selectTopic(topic) {
        this.setState({ topic }, () => {
            let { onChange } = this.props;
            if (onChange)
                onChange({ topic })
        })
    }
    renderTopics() {
        let { topics, topic: currentTopic } = this.state;
        return topics.map((topic, idx) => {
            return (<li key={idx}
                style={{ cursor: 'pointer', backgroundColor: currentTopic === topic ? '#DEF' : '#FFF' }}
                onClick={e => this.selectTopic(topic)}
                className="list-group-item">{topic}</li>)
        })
    }
    render() {
        return (
            <div className="card card-body">
                <ul>{this.renderTopics()}</ul>
            </div>
        );
    }
}

export default TopicList;
