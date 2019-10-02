import React, { Component } from 'react';

class Item extends Component {
    state = {
        currentTab: 1,
        reviews: [
            { author: 'who1', stars: 5, body: 'sample review-1' },
            { author: 'who2', stars: 2, body: 'sample review-2' }
        ]
    }
    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex })// state change..
    }
    renderTabPanel(item) {
        let currentTab = this.state.currentTab;
        switch (currentTab) {
            case 1: return (<div>{item.description}</div>)
            case 2: return (<div>{"Not Yet"}</div>)
            case 3: return (<div>{"None Yet"}</div>)
            default: return null;
        }
    }
    render() {
        let item = this.props.value;
        let currentTab = this.state.currentTab;
        return (
            <div>
                <div className="list-group-item" key={item.id}>
                    <div className="row">
                        <div className="col-sm-3 col-md-3">
                            <img alt={item.name + " burger image"} src={item.imgPath} className="img-fluid" />
                        </div>
                        <div className="col-sm-9 col-md-9">
                            <h5>{item.name}</h5>
                            <h6><span>&#8377;</span>{item.price}</h6>
                            <button className="btn btn-dark btn-sm">buy</button>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a onClick={e => this.changeTab(e, 1)} className={currentTab === 1 ? 'nav-link active' : 'nav-link'} href="/">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => this.changeTab(e, 2)} className={currentTab === 2 ? 'nav-link active' : 'nav-link'} href="/">Ingre..</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => this.changeTab(e, 3)} className={currentTab === 3 ? 'nav-link active' : 'nav-link'} href="/">Reviews</a>
                                </li>
                            </ul>
                            {this.renderTabPanel(item)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;