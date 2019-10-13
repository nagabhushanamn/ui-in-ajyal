import React, { Component } from 'react';

class ReviewForm extends Component {
    state = {
        isOpen: false,
        stars: 5,
        author: 'Nag',
        body: ''
    }
    toggleForm() {
        this.setState({ isOpen: !this.state.isOpen })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let { stars, author, body } = this.state;
        let formData = { stars, author, body }
        let { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit({ formData })
            this.setState({
                isOpen: false,
                stars: 5,
                author: 'Nag',
                body: ''
            })
        }
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    isFormValid() {
        let { author, body } = this.state;
        if (author !== "" && body !== "") return true;
    }
    renderForm() {
        let { isOpen, stars, author, body } = this.state;
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
                                <select className="form-control"
                                    value={stars}
                                    id="stars"
                                    onChange={e => this.handleChange(e)}>
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                                <div className="text-danger">{stars < 3 ? 'please provide detailed reason in body field' : ''}</div>
                            </div>
                            <div>
                                <label>author</label>
                                <input type="email"
                                    className="form-control"
                                    value={author} id="author"
                                    onChange={e => this.handleChange(e)} />
                                <div className="text-danger">{author === "" ? 'say who u r' : ''}</div>
                            </div>
                            <div>
                                <label>body</label>
                                <textarea className="form-control"
                                    value={body}
                                    onChange={e => this.handleChange(e)}
                                    id="body">
                                </textarea>
                            </div>
                            <button disabled={!this.isFormValid()} className="btn btn-dark">submit</button>
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