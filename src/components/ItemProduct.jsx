import React from 'react';
import './style/ItemProduct.css';
import { useNavigate } from 'react-router-dom';

const ItemProduct = ({ pros }) => {
    const navigate = useNavigate();


    const onClickItemProduct = () => {
        localStorage.setItem('current-product', JSON.stringify(pros));
        const currentCate = JSON.parse(localStorage.getItem('category'));
        navigate(currentCate.link + '/detail');
    }

    return (
        <div className="product-item-container" onClick={onClickItemProduct}>
            <img src={pros.imageUrl} alt={pros.nameProduct} className="product-thumbnail" />

            <div className="block-information">
                <h3 className="product-name">{pros.nameProduct}</h3>
                <span className='price'>{pros.price.toLocaleString('vi-VN')}
                <span style={{ textDecoration: 'underline' }}>đ</span></span>
            </div>
        </div>
    );
};

export default ItemProduct;
