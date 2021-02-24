import { Header } from 'app/header/Header';
import React, { Component, useEffect } from 'react';
import { SearchProducts } from './search-products/SearchProducts';
import { Product } from './product/Product';
import { EmptyPage } from './empty-page/EmptyPage';
import { Pagination } from './pagination/Pagination';
import { ProductModal } from './product/product-modal/ProductModal';
import { ReactComponent as Loader } from "../../assets/icons/loader.svg";
import "./Products.scss";

export class Products extends Component {

  state = {
    products: [],
    isLoaded: false,
    query: 'https://join-tsh-api-staging.herokuapp.com/products?limit=4&page=1'
  }

  totalPages: number = 20;
  currentPage: number = 1;
  limitPerPage: number = 4;

  fetchData = () => {
    //setTimeout to see loader works
    setTimeout(() => {
      fetch(this.state.query)
        .then(response => response.json())
        .then(response => {
          this.setState({
            products: response.items,
            isLoaded: true
          })
        });
    }, 500);
  }

  componentDidMount() {
    this.fetchData();
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

  handleDataChange = (value: string) => {
    this.setState({
      query: value,
      isLoaded: false
    }, () => { this.fetchData(); });
  }

  render() {
    const items = this.state.products.map(item => (
      <Product product={item} />
    ))
    return (
      <>
        <Header isLoginPage={false} />
        <SearchProducts onSearch={this.handleDataChange} />
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
