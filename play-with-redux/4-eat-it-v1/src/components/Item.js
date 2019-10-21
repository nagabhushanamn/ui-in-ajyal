import React, { useEffect, useState } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';


const Item = (props) => {

    let [currentTab, setCurrentTab] = useState(1)
    let [reviews, setReviews] = useState([])
 
    useEffect(() => {
        if (currentTab === 3) {
            fetch('reviews.json', { method: 'GET' })
                .then(response => response.json())
                .then(allReviews => {
                    let { item } = props;
                    return allReviews.filter(review => review.itemId === item.id)
                })
                .then(reviews => {
                    setReviews(reviews)
                })
        }
    })

    // #1
    const changeTab = (tabIndex, e) => {
        e.preventDefault()
        setCurrentTab(tabIndex)
    }

    // #2
    const buy = () => {
        let { onBuy, item } = props;
        if (onBuy) {
            let event = { item };
            onBuy(event)
        }
    }

    // #3
    const renderReviews = () => {
        return reviews.map((review, idx) => {
            return (
                <Review review={review} key={idx} />
            )
        })
    }

    // #4
    const addNewReview = (e) => {
        let { formData: newReview } = e;
        reviews = reviews.concat(newReview)
        setReviews(reviews)
    }

    // #5
    const renderTabPanel = (item) => {
        switch (currentTab) {
            case 1: return (<div>{item.description}</div>)
            case 2: return (<div>{"chef on holiday.."}</div>)
            case 3: return (
                <div>
                    {renderReviews()}
                    <ReviewForm onSubmit={e => addNewReview(e)} />
                </div>)
            default: return null;
        }
    }

    let { item, itemQty } = props;
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
                        <button onClick={e => buy()} disabled={!item.canBuy} className="btn btn-sm btn-dark">buy</button>
                        &nbsp;<span className="badge badge-warning">{itemQty}</span>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a onClick={e => changeTab(1, e)} className={currentTab === 1 ? 'nav-link active' : 'nav-link'} href="/">description</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => changeTab(2, e)} className={currentTab === 2 ? 'nav-link active' : 'nav-link'} href="/">ingre..</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => changeTab(3, e)} className={currentTab === 3 ? 'nav-link active' : 'nav-link'} href="/">reviews</a>
                            </li>
                        </ul>
                        {renderTabPanel(item)}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Item;

