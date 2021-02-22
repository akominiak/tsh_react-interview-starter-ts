import { Header } from 'app/header/Header';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';

import "./SearchProducts.scss";

export class SearchProducts extends Component {
    render() {
        return (
            <div className="container search-bar">
                <form>
                    <div className="input-search">
                        <input type="text" placeholder="Search" />
                        <Search className="search-icom" />
                    </div>
                    <div className="checkboxes">
                        <label>
                            <input type="checkbox" name="Active" className="custom-chckbx" />
                            Active
                        </label>
                        <label>
                            <input type="checkbox" name="Promo" className="custom-chckbx" />
                            Promo
                        </label>
                    </div>
                </form>
            </div>
        )
    }
};