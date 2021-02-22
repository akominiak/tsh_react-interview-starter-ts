import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import "./Header.scss";
import { LoginButton } from './login-button/LoginButton';
import { UserProfile } from './user-profile/UserProfile';

export const Header = (props: any) => {
    let isUserAuthorized = localStorage.getItem('logged');
    if (isUserAuthorized !== null)
        isUserAuthorized = JSON.parse(isUserAuthorized);
    return (
        <header className="container">
            <Link to={AppRoute.home}>
                <div className="logo">join.tsh.io</div>
            </Link>
            {props.isLoginPage ? null :
                <div className="profile">
                    {isUserAuthorized ? <UserProfile /> :
                        <Link to={AppRoute.login}>
                            <LoginButton />
                        </Link>
                    }
                </div>
            }
        </header >
    );
};