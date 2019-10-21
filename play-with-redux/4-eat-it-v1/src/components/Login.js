import React, { useState } from 'react';

import {
    Redirect,
} from "react-router-dom";

const Login = props => {
    
    let [isAuth, setIsAuth] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        let credentials = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        if (credentials.username === "ajyal" && credentials.password === "shhh") {
            setIsAuth(true)
        } else {
            alert('stay here')
        }
    }

    const renderRedirect = () => {
        if (isAuth) {
            return <Redirect to={{ pathname: '/items' }} />
        }
    }

    return (
        <div>
            {renderRedirect()}
            <div className="row">
                <div className="col-4 col-sm-8 col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form onSubmit={e => handleSubmit(e)}>
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


export default Login;

