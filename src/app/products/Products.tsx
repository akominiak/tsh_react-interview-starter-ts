import { Header } from 'app/header/Header';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { SearchProducts } from './search-products/SearchProducts';

import "./Products.scss";
import { Product } from './product/Product';
import { EmptyPage } from './empty-page/EmptyPage';
import { Pagination } from './pagination/Pagination';
import { ProductModal } from './product/product-modal/ProductModal';
import { ReactComponent as Loader } from "../../assets/icons/loader.svg";

export class Products extends Component {
  state = {
    products: [],
    isLoaded: false
  }
  totalPages: number = 20;
  currentPage: number = 1;

  componentDidMount() {
    fetch('https://join-tsh-api-staging.herokuapp.com/products?limit=4&page=1')
      .then(response => response.json())
      .then(response => {
        this.setState({ products: response.items, isLoaded: true })
      });
  }

  componentDidUpdate() {
    if (this.state.isLoaded) {
      let pageItems: NodeListOf<Element> = document.querySelectorAll('.page-item')
      pageItems.forEach(element => {
        if (Number.parseInt(element.id) === this.currentPage) {
          element.classList.add('current-page');
        }
      });
    }
  }

  render() {
    const items = this.state.products.map(item => (
      <Product product={item} />
    ))
    return (
      <>
        <Header isLoginPage={false} />
        <SearchProducts />
        { false && <ProductModal />}
        <div className="container">
          {this.state.isLoaded ?
            (items.length > 0 ? <>
              {items}
              <Pagination
                totalPages={this.totalPages}
                currentPage={this.currentPage}
              />
            </> : <EmptyPage />) :
            <div className="loader-wrap">
              <Loader className="loader" />
            </div>}
        </div>
      </>
    );
  }
};
