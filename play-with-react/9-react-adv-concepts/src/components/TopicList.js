
// Component  ==> UI

import React, { Component } from 'react';

// import store from '../store/index'
// - or-
import store from '../store'

class TopicList extends Component {
    
    constructor() {
        super();
        this.state = {
            topics: store.getState().topics  // get intial state
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            let newTopics = store.getState().topics;
            this.setState({ topics: newTopics })
        })
    }
    renderTopics() {
        let { topics } = this.state;
        return topics.map((topic, idx) => {
            return <li key={idx} className="list-group-item">{topic}</li>
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">All Topics</div>
                <div className="card-body">
                    <ul>
                        {this.renderTopics()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TopicList;