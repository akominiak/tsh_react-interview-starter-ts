import React from 'react';
import { ReactComponent as Close } from '../../../../assets/icons/close.svg';
import "./ProductModal.scss";

interface ProductProps {
    product: {
        image: string,
        name: string,
        description: string,
    }
    onClose: () => void;
}

export const ProductModal = (props: ProductProps) => {
    return (
        <section className="modal-main">
            <div className="modal-container">
                <div className="btn-wrap">
                    <button type="button" onClick={props.onClose}>
                        <Close />
                    </button>
                </div>
                <img src={props.product.image} alt="" />
                <div className="desc-wrap">
                    <h2>{props.product.name}</h2>
                    <p>{props.product.description}</p>
                </div>
            </div>
        </section>
    );
};