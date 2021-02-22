import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import "./UserProfile.scss";

const handleUserProfile = () => {
    let dropdownElement: any = document.querySelector('.dropdown');
    dropdownElement.classList.toggle('active');
}

const handleLogout = () => {
    localStorage.setItem('logged', 'false');
}

export const UserProfile = () => {
    return (
        <div className="user-wrap">
            <div className="user-profile" onClick={handleUserProfile}>
            </div>
            <div className="dropdown" onClick={handleLogout}>
                <Link to={AppRoute.login}>
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};