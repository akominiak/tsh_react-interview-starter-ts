import { Header } from 'app/header/Header';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';

import "./SearchProducts.scss";

export class SearchProducts extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="checkboxes">
                        <input type="checkbox" name="Active" />
                        <input type="checkbox" name="Promo" />
                    </div>
                </form>
            </div>
        )
    }
};