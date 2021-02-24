import React, { Component } from 'react';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';

import "./SearchProducts.scss";

interface ComponentProps {
    onSearch: (value: string) => void;
}
export class SearchProducts extends Component<ComponentProps> {

    state = {
        productsText: '',
        active: false,
        promo: false
    }

    baseUrl: string = 'https://join-tsh-api-staging.herokuapp.com/';
    limitPerPage: number = 4;
    page: number = 1;

    handleChange = (e: any) => {
        const checkbox = "checkbox";
        const text = "text";
        const type: any = e.target.type;
        const name: any = e.target.name;
        if (type === text) {
            const value: string = e.target.value;
            this.setState({
                [name]: value
            }, () => {
                //setTimeout to prevent quick reloading while user is typing
                setTimeout(() => {
                    this.makeQuery();
                }, 300)
            });
        } else if (type === checkbox) {
            const checked: boolean = e.target.checked;
            this.setState({
                [name]: checked
            }, () => {
                this.makeQuery();
            });
        }
    }

    makeQuery = () => {
        //creating query from filters
        let query = this.baseUrl + 'products?';
        if (this.state.productsText) {
            query = query + `search=${this.state.productsText}&`;
        }
        query = query + `limit=${this.limitPerPage}`;
        query = query + `&page=${this.page}`;
        if (this.state.promo) {
            query = query + `&promo=${this.state.promo}`;
        }
        if (this.state.active) {
            query = query + `&active=${this.state.active}`;
        }
        this.props.onSearch(query);
    }

    render() {
        return (
            <div className="container search-bar">
                <form>
                    <div className="input-search">
                        <input
                            type="text"
                            placeholder="Search"
                            name="productsText"
                            value={this.state.productsText}
                            onChange={this.handleChange}
                        />
                        <Search className="search-icon" />
                    </div>
                    <div className="checkboxes">
                        <label>
                            <input
                                type="checkbox"
                                name="active"
                                className="custom-chckbx"
                                checked={this.state.active}
                                onChange={this.handleChange}
                            />
                            Active
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="promo"
                                className="custom-chckbx"
                                checked={this.state.promo}
                                onChange={this.handleChange}
                            />
                            Promo
                        </label>
                    </div>
                </form>
            </div>
        )
    }
};