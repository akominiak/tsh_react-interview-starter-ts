import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import "./LoginForm.scss";
export class LoginForm extends Component {

    render() {
        return (
            <form>
                <div>
                    <label>
                        Username
            <input name="username" />
                    </label>
                </div>
                <div>
                    <label>
                        Password
            <input name="password" type="password" />
                    </label>
                </div>
                <button className="btn normal-blue" type="submit">Log In</button>
                <a href="#">Forgot password?</a>
            </form>

        )
    }
}