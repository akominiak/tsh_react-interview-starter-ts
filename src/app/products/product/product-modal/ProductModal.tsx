import React, { Component } from 'react';
import "./ProductModal.scss";
import { ReactComponent as Close } from '../../../../assets/icons/close.svg';

export const ProductModal = (props: any) => {

    return (
        <div className="modal">
            <section className="modal-main">
                <button type="button">
                    <Close />
                </button>
            </section>
        </div>
    );
};