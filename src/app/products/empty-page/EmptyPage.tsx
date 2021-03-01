import React from 'react';
import { ReactComponent as Empty } from '../../../assets/icons/empty.svg';
import "./EmptyPage.scss";

export const EmptyPage = () => (
    <div className="empty-page">
        <div className="info">
            <Empty className="icon" />
            <h3>Ooops… It’s empty here</h3>
            <p>There are no products on the list</p>
        </div>
    </div>
);