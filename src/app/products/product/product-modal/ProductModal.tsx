import React from 'react';
import { ReactComponent as Close } from '../../../../assets/icons/close.svg';
import "./ProductModal.scss";

const handleCLose = (props: any) => {
    let modal: any = document.getElementById(props.product.id);
    modal.classList.remove('active');
}
export const ProductModal = (props: any) => {
    return (
        <div className="modal">
            <section className="modal-main">
                <div className="modal-container">
                    <div className="btn-wrap">
                        <button type="button" onClick={() => handleCLose(props)}>
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