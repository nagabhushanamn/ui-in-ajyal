import React, { Component } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm_v2';

class Item extends Component {

    state = {
        currentTab: 1,
        reviews: []
        // itemQty: 0
    }

    changeTab(tabIndex, e) {
        e.preventDefault()
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                fetch('reviews.json', { method: 'GET' })
                    .then(response => response.json())
                    .then(allReviews => {
                        let { item } = this.props;
                        return allReviews.filter(review => review.itemId === item.id)
                    })
                    .then(reviews => {
                        this.setState({ reviews })
                    })
            }
        })
    }

    buy() {
        // let { itemQty } = this.state
        // itemQty++
        this.setState({}, () => {
            let { onBuy, item } = this.props;
            if (onBuy) {
                let event = { item };
                onBuy(event)
            }
        }) // async
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return (
                <Review review={review} key={idx} />
            )
        })
    }
    addNewReview(e) {

        let { formData: newReview } = e;
        
        // let body = { ...newReview, itemId: this.props.item.id };
        // fetch('reviews.json', { method: 'POST', body: JSON.stringify(body) })
        //     .then(response => {
        //         let { reviews } = this.state;
        //         reviews = reviews.concat(newReview)
        //         this.setState({ reviews })
        //     })

        let { reviews } = this.state;
        reviews = reviews.concat(newReview)
        this.setState({ reviews })

    }
    renderTabPanel(item) {
        let { currentTab } = this.state;
        switch (currentTab) {
            case 1: return (<div>{item.description}</div>)
            case 2: return (<div>{"chef on holiday.."}</div>)
            case 3: return (
                <div>
                    {this.renderReviews()}
                    <ReviewForm onSubmit={e => this.addNewReview(e)} />
                </div>)
            default: return null;
        }
    }

    render() {
        let { item, itemQty } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-3">
                        <img className="img-fluid" alt={item.name} src={item.imgPath} />
                    </div>
                    <div className="col-9 col-sm-9 col-md-9">
                        <div>
                            <h5>{item.name}</h5>
                            <h6>&#8377;{item.price}</h6>
                            <button onClick={e => this.buy()} disabled={!item.canBuy} className="btn btn-sm btn-dark">buy</button>
                            &nbsp;<span className="badge badge-warning">{itemQty}</span>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a onClick={e => this.changeTab(1, e)} className={currentTab === 1 ? 'nav-link active' : 'nav-link'} href="/">description</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => this.changeTab(2, e)} className={currentTab === 2 ? 'nav-link active' : 'nav-link'} href="/">ingre..</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={e => this.changeTab(3, e)} className={currentTab === 3 ? 'nav-link active' : 'nav-link'} href="/">reviews</a>
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