import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import "./Header.scss";

export const Header = (props: any) => {
    return (
        <header className={props.isLoginPage ? "container" : ""}>
            <Link to={AppRoute.home}>
                <div className="logo">join.tsh.io</div>
            </Link>
        </header >
    );
};