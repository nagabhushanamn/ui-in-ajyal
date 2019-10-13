import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { from } from 'rxjs';

class ItemForm extends Component {
    state = {
        isSaved: false,
    }
    handleFomSubmit(e) {
        e.preventDefault();
        let formData = {
            name: this.refs.name.value,
            price: this.refs.price.value,
            canBuy: this.refs.canBuy.value,
            description: this.refs.description.value,
            imgPath: this.refs.imgPath.value,
        }
        fetch("http://192.168.1.113:8080/api/items", {
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
    render() {
        let { isSaved } = this.state;
        if (isSaved)
            return (
                <Redirect to={{
                    pathname: 'all'
                }} />
            )
        else
            return (
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header">Item Form</div>
                            <div className="card-body">
                                <form onSubmit={e => this.handleFomSubmit(e)}>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input className="form-control" ref="name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Price:</label>
                                        <input type="number" className="form-control" ref="price" />
                                    </div>
                                    <div className="form-group">
                                        <label>Can buy:</label>
                                        <select className="form-control" ref="canBuy">
                                            <option>true</option>
                                            <option>false</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Desciption:</label>
                                        <textarea className="form-control" ref="description"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Image:</label>
                                        <input className="form-control" ref="imgPath" />
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

export default ItemForm;