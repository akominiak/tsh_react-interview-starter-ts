import React, { Component } from 'react';
import "./Product.scss";
import { ReactComponent as Star } from "../../../assets/icons/star-regular.svg";
import { ReactComponent as FilledStar } from "../../../assets/icons/star-orange.svg";
import { ProductModal } from './product-modal/ProductModal';

export const Product = (props: any) => {
    const starRatingScale = 5;
    let filledStars = [];
    for (let i = 0; i < props.product.rating; i++) {
        filledStars.push(<FilledStar />)
    }
    for (let i = 0; i < starRatingScale - props.product.rating; i++) {
        filledStars.push(<Star />)
    }

    const showDetails = () => {
    }

    return (
        <>
            <div className="item">
                <div className="img-container">
                    <img src={props.product.image} alt="Product" />
                    {props.product.promo && <div className="promo">Promo</div>}
                </div>
                <div className="desc-container">
                    <h3>{props.product.name}</h3>
                    <p>{props.product.description}</p>
                    <div className="ratio">
                        {filledStars}
                    </div>
                    {props.product.active ?
                        <button className="btn normal-blue" onClick={showDetails}>Show details</button> :
                        <button className="btn disabled">Unavailible</button>}
                </div>
            </div>
        </>
    )
}

