import React from 'react';
import './style/ItemProduct.css';

const ItemProduct = ({ pros }) => {
    const onClickItemProduct = () => {
        localStorage.setItem('current-product', JSON.stringify(pros));
    }

    return (
        <div className="product-item-container" onClick={onClickItemProduct}>
            <img src={`/${pros.thumbnail}`} alt={pros.nameProduct} className="product-thumbnail" />

            <div className="block-information">
                <h3 className="product-name">{pros.nameProduct}</h3>
                <div className="price">{pros.price}</div>
            </div>
        </div>
    );
};

export default ItemProduct;
