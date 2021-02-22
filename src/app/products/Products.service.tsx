import { Component } from "react";

export class ProductsService extends Component {
    url: string = 'https://join-tsh-api-staging.herokuapp.com/products?';
    /*     constructor(props: any) {
            super(props)
        } */
    getProducts(): any {
        debugger;
        let query = 'limit=10&page=1&promo=true&active=true';
        fetch(this.url + query)
            .then(response => response.json)
            .then(response => { () => { return response } });

    }
}