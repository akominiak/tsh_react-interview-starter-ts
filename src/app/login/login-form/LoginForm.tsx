import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import "./LoginForm.scss";
export class LoginForm extends Component {

    render() {
        return (
            <div className="form container">
                <h2>Login</h2>
                <form>
                    <div>
                        <label>
                            Username
            <input name="username" placeholder="Enter username" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password
            <input name="password" type="password" placeholder="Enter password" />
                        </label>
                    </div>
                    <button className="btn normal-blue" type="submit">Log In</button>
                    <a href="#">Forgot password?</a>
                </form>
            </div>
        )
    }
}