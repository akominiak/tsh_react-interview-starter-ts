import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import "./Header.scss";

export const Header = () => {
    return (
        <header>
            <div className="logo">join.tsh.io</div>
        </header>
    );
};