import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class ItemForm extends Component {
    constructor(props) {
        super();
    }
    state = {
        isSaved: false,
        item: {
            name: '',
            price: 0,
            canBuy: false,
            description: '',
            imgPath: ''
        },
        isEditing: false,
    }
    componentDidMount() {
        let itemId = this.props.match.params['itemId'];
        if (itemId)
            fetch(`http://localhost:8080/api/items/${itemId}`)
                .then(response => response.json())
                .then(item => {
                    this.setState({ item, isEditing: true })
                })
    }
    handleFomSubmit(e) {
        e.preventDefault();
        let { isEditing, item } = this.state;
        let { name, price, canBuy, description, imgPath, id } = item;
        let formData = {
            name,
            price,
            canBuy,
            description,
            imgPath
        }
        if (!isEditing) {
            fetch(`http://localhost:8080/api/items`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(item => {
                    this.setState({ isSaved: true })
                })
        }
        if (isEditing) {
            console.log(id)
            fetch(`http://localhost:8080/api/items/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(item => {
                    this.setState({ isSaved: true })
                })
        }

    }
    handleChange(e) {
        let field = e.target.id;
        let fieldValue = e.target.value;
        let { item } = this.state;
        item = { ...item, [field]: fieldValue }
        this.setState({ item })
    }
    render() {
        let { isSaved } = this.state;
        if (isSaved)
            return (
                <Redirect to={{
                    pathname: '/all'
                }} />
            )
        else {
            let { item } = this.state;
            let { name, price, canBuy, description, imgPath } = item
            return (
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header">Item Form</div>
                            <div className="card-body">
                                <form onSubmit={e => this.handleFomSubmit(e)}>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input value={name} className="form-control" id="name" onChange={e => this.handleChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Price:</label>
                                        <input value={price} type="number" className="form-control" id="price" onChange={e => this.handleChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Can buy:</label>
                                        <select value={canBuy} className="form-control" id="canBuy" onChange={e => this.handleChange(e)}>
                                            <option>true</option>
                                            <option>false</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Desciption:</label>
                                        <textarea value={description} className="form-control" id="description" onChange={e => this.handleChange(e)}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Image:</label>
                                        <input value={imgPath} className="form-control" id="imgPath" onChange={e => this.handleChange(e)} />
                                    </div>
                                    <button className="btn btn-sm btn-dark">submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            );
        }
    }
}

export default ItemForm;