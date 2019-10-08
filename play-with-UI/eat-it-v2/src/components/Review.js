import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'


class Review extends Component {
    rendeStars(n) {
        let arr = [];
        for (let i = 0; i < n; i++)
            arr.push(<i style={{color:'red'}} className="fa fa-star" key={i}></i>)
        return arr;
    }
    render() {
        let review = this.props.value;
        return (
            <div className="alert alert-info">
                <span>{this.rendeStars(review.stars)}</span> &mdash; <span>{review.author}</span>
                <hr />
                <div>{review.body}</div>
            </div>
        );
    }
}

export default Review;