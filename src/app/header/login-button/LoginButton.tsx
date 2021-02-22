import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import "./LoginButton.scss";

export const LoginButton = () => {
    return (
        <>
            <button className="btn normal-white login">
                Login
            </button>
        </>
    );
};