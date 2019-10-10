import React, { Component } from 'react';

class ReviewForm extends Component {
    state = {
        isOpen: false
    }
    toggleForm() {
        this.setState({ isOpen: !this.state.isOpen })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        //console.log(e.target.stars.value)
        // - or-
        let formData = {
            stars: this.refs.stars.value,
            author: this.refs.author.value,
            body: this.refs.body.value,
        }
        let { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit({ formData })
        }
        this.toggleForm();
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen) {
            return (
                <button onClick={e => this.toggleForm()} className="btn btn-sm btn-dark"><i className="fa fa-plus"></i></button>
            )
        } else {
            return (
                <div className="card">
                    <div className="card-header">Review Form</div>
                    <div className="card-body">
                        <form noValidate onSubmit={e => this.handleFormSubmit(e)}>
                            <div>
                                <label>stars</label>
                                <select className="form-control" name="stars" ref="stars">
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                            </div>
                            <div>
                                <label>author</label>
                                <input type="email" className="form-control" name="author" ref="author" />
                            </div>
                            <div>
                                <label>body</label>
                                <textarea className="form-control" name="body" ref="body"></textarea>
                            </div>
                            <button className="btn btn-dark">submit</button>
                            &nbsp;
                            <button onClick={e => this.toggleForm()} className="btn btn-danger">cancel</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default ReviewForm;