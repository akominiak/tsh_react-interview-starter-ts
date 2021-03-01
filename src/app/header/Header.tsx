import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import "./Header.scss";

export const Header = (props: any) => {
    return (
        <div className={props.isLoginPage ? "container head" : "head"}>
            <Link to={AppRoute.home}>
                <div className="logo">join.tsh.io</div>
            </Link>
        </div>
    );
};