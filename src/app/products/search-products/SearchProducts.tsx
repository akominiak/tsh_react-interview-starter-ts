import React, { Component } from 'react';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import "./SearchProducts.scss";

interface ComponentProps {
    onSearch: (searchText: string, promo: boolean, active: boolean) => void;
}

export class SearchProducts extends Component<ComponentProps> {

    state = {
        productsText: '',
        active: false,
        promo: false
    }

    handleChange = (e: any) => {
        const checkbox = "checkbox";
        const text = "text";
        const type: any = e.target.type;
        const name: string = e.target.name;
        if (type === text) {
            const value: string = e.target.value;
            this.setState({
                [name]: value
            }, () => {
                //setTimeout to prevent quick reloading while user is typing
                setTimeout(() => {
                    this.props.onSearch(this.state.productsText, this.state.promo, this.state.active);
                }, 300);
            });
        } else if (type === checkbox) {
            const checked: boolean = e.target.checked;
            this.setState({
                [name]: checked
            }, () => {
                this.props.onSearch(this.state.productsText, this.state.promo, this.state.active);
            });
        }
    }

    render() {
        return (
            <div className="search-bar">
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