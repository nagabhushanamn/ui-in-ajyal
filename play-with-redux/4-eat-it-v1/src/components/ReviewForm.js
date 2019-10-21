import React, { useState } from 'react';

const ReviewForm = props => {

    let [isOpen, setIsOpen] = useState(false)
    let [stars, setStars] = useState(5)
    let [author, setAuthor] = useState("Nag")
    let [body, setBody] = useState("")

    const toggleForm = () => {
        setIsOpen(!isOpen)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let formData = { stars, author, body }
        let { onSubmit } = props;
        if (onSubmit) {
            onSubmit({ formData })
            setIsOpen(false)
            setStars(5)
            setAuthor('Nag')
            setBody("")
        }
    }

    const handleChange = (e) => {
        // way-1
        if (e.target.id === "stars")
            setStars(e.target.value)
        if (e.target.id === "author")
            setAuthor(e.target.value)
        if (e.target.id === "body")
            setBody(e.target.value)

    }

    const isFormValid = () => {
        if (author !== "" && body !== "") return true;
    }
    const renderForm = () => {
        if (!isOpen) {
            return (
                <button onClick={e => toggleForm()} className="btn btn-sm btn-dark"><i className="fa fa-plus"></i></button>
            )
        } else {
            return (
                <div className="card">
                    <div className="card-header">Review Form</div>
                    <div className="card-body">
                        <form noValidate onSubmit={e => handleFormSubmit(e)}>
                            <div>
                                <label>stars</label>
                                <select className="form-control"
                                    value={stars}
                                    id="stars"
                                    onChange={e => handleChange(e)}>
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                                <div className="text-danger">{stars < 3 ? 'please provide detailed reason in body field' : ''}</div>
                            </div>
                            <div>
                                <label>author</label>
                                <input type="email"
                                    className="form-control"
                                    value={author} id="author"
                                    onChange={e => handleChange(e)} />
                                <div className="text-danger">{author === "" ? 'say who u r' : ''}</div>
                            </div>
                            <div>
                                <label>body</label>
                                <textarea className="form-control"
                                    value={body}
                                    onChange={e => handleChange(e)}
                                    id="body">
                                </textarea>
                            </div>
                            <button disabled={!isFormValid()} className="btn btn-dark">submit</button>
                            &nbsp;
                            <button onClick={e => toggleForm()} className="btn btn-danger">cancel</button>
                        </form>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="row">
            <div className="col-12 col-sm-8 col-md-6">
                {renderForm()}
            </div>
        </div>
    );

}


export default ReviewForm;