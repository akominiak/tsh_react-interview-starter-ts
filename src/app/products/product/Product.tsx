import React, { Component } from 'react';
import { ProductModal } from './product-modal/ProductModal';
import { ReactComponent as Star } from "../../../assets/icons/star-regular.svg";
import { ReactComponent as FilledStar } from "../../../assets/icons/star-orange.svg";
import "./Product.scss";
import ReactModal from 'react-modal';

ReactModal.setAppElement('body')

interface ProductProps {
    product: IProduct;
}
interface IProduct {
    id: number,
    name: string,
    description: string,
    rating: number,
    image: string,
    promo: boolean,
    active: boolean
}

export class Product extends Component<ProductProps> {
    state = {
        showModal: false
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        const starRatingScale: number = 5;
        let filledStars = [];
        for (let i = 0; i < this.props.product.rating; i++) {
            filledStars.push(<FilledStar key={i} />)
        }
        for (let i = 0; i < starRatingScale - this.props.product.rating; i++) {
            filledStars.push(<Star key={i + this.props.product.rating} />)
        }
        return (
            <>
                <div className="item">
                    <div className="img-container">
                        <img src={this.props.product.image} alt="Product" />
                        {this.props.product.promo && <div className="promo">Promo</div>}
                    </div>
                    <div className="desc-container">
                        <h3>{this.props.product.name}</h3>
                        <p>{this.props.product.description}</p>
                        <div className="ratio">
                            {filledStars}
                        </div>
                        {this.props.product.active ?
                            <button className="btn normal-blue" onClick={this.handleOpenModal}>Show details</button> :
                            <button className="btn disabled">Unavailible</button>}
                    </div>
                </div>
                <div className="product-modal">
                    <ReactModal
                        className="modal"
                        isOpen={this.state.showModal}
                        onRequestClose={this.handleCloseModal}
                        overlayClassName="overlay">
                        <ProductModal
                            product={this.props.product}
                            onClose={this.handleCloseModal}
                        />
                    </ReactModal>
                </div>
            </>
        )
    }
}

