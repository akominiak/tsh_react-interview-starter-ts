import React from 'react';
import "./ProductModal.scss";
import { ReactComponent as Close } from '../../../../assets/icons/close.svg';

const handleCLose = () => {
    let modal: any = document.querySelector('.product-modal');
    modal.classList.remove('active');
}
export const ProductModal = (props: any) => {
    //fix it!
    return (
        <div className="modal">
            <section className="modal-main">
                <div className="modal-container">
                    <div className="btn-wrap">
                        <button type="button" onClick={handleCLose}>
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
        </div>
    );
};