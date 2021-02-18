import { Header } from 'app/header/Header';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { SearchProducts } from './search-products/SearchProducts';

import "./Products.scss";
import { Product } from './product/Product';
import { EmptyPage } from './empty-page/EmptyPage';


const products: any[] = [
  {
    "id": 5,
    "name": "Tasty Fresh Sausages",
    "description": "Voluptatibus dolor asperiores maiores.",
    "rating": 3,
    "image": "https://picsum.photos/640/480?random=8451",
    "promo": true,
    "active": true
  }
];
export class Products extends Component {
  render() {
    const items = products.map(item => (
      <Product product={item} />
    ))
    return (
      <>
        <Header />
        <SearchProducts />
        <div className="container">
          {items.length > 0 ? items : <EmptyPage />}
          <Link to={AppRoute.login}> Login </Link>
        </div>
      </>
    );
  }
};
