import React, { Component } from 'react';

import {
    Redirect,
} from "react-router-dom";

class Login extends Component {

    state = {
        isAuth: false,
    }

    handleSubmit(e) {
        e.preventDefault();
        let credentials = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        if (credentials.username === "ajyal" && credentials.password === "shhh") {
            this.setState({ isAuth: true })
        } else {
            alert('stay here')
        }
    }
    renderRedirect() {
        let { isAuth } = this.state;
        if (isAuth) {
            return <Redirect to={{ pathname: '/items' }} />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <div className="row">
                    <div className="col-4 col-sm-8 col-md-4 offset-md-4">
                        <div className="card">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <form onSubmit={e => this.handleSubmit(e)}>
                                    <div className="form-group">
                                        <label>username</label>
                                        <input name="username" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>passwod</label>
                                        <input type="password" name="password" className="form-control" />
                                    </div>
                                    <button className="btn btn-dark">login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

