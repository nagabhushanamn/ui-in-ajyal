import React from 'react';

function renderStars(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(<i key={i} className="fa fa-star"></i>)
    }
    return arr;
}

const Review = (props) => {
    let { review } = props;
    return (
        <div>
            <div className="alert alert-warning">
                {renderStars(review.stars)} &mdash; <span>{review.author}</span>
                <hr />
                <div>{review.body}</div>
            </div>
        </div>
    );
};

export default Review;