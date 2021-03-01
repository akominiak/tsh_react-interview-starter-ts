import { Header } from 'app/header/Header';
import React, { Component } from 'react';
import { SearchProducts } from './search-products/SearchProducts';
import { Product } from './product/Product';
import { EmptyPage } from './empty-page/EmptyPage';
import { Pagination } from './pagination/Pagination';
import { ReactComponent as Loader } from "../../assets/icons/loader.svg";
import { LoginButton } from 'app/header/login-button/LoginButton';
import { UserProfile } from 'app/header/user-profile/UserProfile';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import "./Products.scss";

interface IProduct {
  id: number,
  name: string,
  description: string,
  rating: number,
  image: string,
  promo: boolean,
  active: boolean
}
interface IProductsState {
  products: IProduct[],
  isLoaded: boolean,
  query: string,
  searchText: string,
  promo: boolean,
  active: boolean,
  currentPage: number,
  totalPages: number
}

export class Products extends Component<{}, IProductsState> {
  constructor(props: any) {
    super(props)
    this.state = {
      products: [],
      isLoaded: false,
      query: '',
      searchText: '',
      promo: false,
      active: false,
      currentPage: 1,
      totalPages: 0
    }
  }

  baseUrl: string = 'https://join-tsh-api-staging.herokuapp.com/';

  fetchData = () => {
    //setTimeout to see loader works
    setTimeout(() => {
      fetch(this.state.query)
        .then(response => response.json())
        .then(response => {
          this.setState({
            products: response.items,
            currentPage: response.meta.currentPage,
            totalPages: response.meta.totalPages,
            isLoaded: true
          })
        });
    }, 500);
  }

  componentDidMount() {
    this.makeQuery();
  }

  componentDidUpdate() {
    if (this.state.isLoaded) {
      let pageItems: NodeListOf<Element> = document.querySelectorAll('.page-item')
      pageItems.forEach(element => {
        if (Number.parseInt(element.id) === this.state.currentPage) {
          element.classList.add('current-page');
        }
      });
    }
  }

  handleDataChange = (searchText: string, promo: boolean, active: boolean) => {
    this.setState({
      searchText: searchText,
      promo: promo,
      active: active,
      isLoaded: false,
      currentPage: 1
    }, () => { this.makeQuery() });
  }

  handlePageChange = (page: number) => {
    this.setState({
      currentPage: page,
      isLoaded: false
    }, () => { this.makeQuery() });
  }

  makeQuery = () => {
    //creating query from filters
    let query = this.baseUrl + 'products?';
    const limitPerPage: number = window.innerWidth > 600 ? 8 : 4;
    if (this.state.searchText) {
      query = query + `search=${this.state.searchText}&`;
    }
    query = query + `limit=${limitPerPage}`;
    query = query + `&page=${this.state.currentPage}`;
    if (this.state.promo) {
      query = query + `&promo=${this.state.promo}`;
    }
    if (this.state.active) {
      query = query + `&active=${this.state.active}`;
    }
    this.setState({ query: query }, this.fetchData);
  }

  render() {
    const items: Array<JSX.Element> = this.state.products.map(item => (
      <Product key={item.id} product={item} />
    ))
    //simulate login
    let isUserAuthorized = localStorage.getItem('logged');
    if (isUserAuthorized !== null)
      isUserAuthorized = JSON.parse(isUserAuthorized);
    return (
      <>
        <header className="container">
          <Header isLoginPage={false} />
          <SearchProducts onSearch={this.handleDataChange} />
          <div className="profile">
            {isUserAuthorized ? <UserProfile /> :
              <Link to={AppRoute.login}>
                <LoginButton />
              </Link>
            }
          </div>
        </header>
        <div className="container">
          {this.state.isLoaded ?
            (items.length > 0 ?
              <>
                <div className="products">
                  {items}
                </div>
                <Pagination
                  totalPages={this.state.totalPages}
                  currentPage={this.state.currentPage}
                  onChangePage={this.handlePageChange}
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
