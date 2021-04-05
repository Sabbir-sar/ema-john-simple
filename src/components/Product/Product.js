import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props.product.name);
    // console.log(props.product.name);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                {/* <h3>This is product</h3>
                <h4>{props.product.name}</h4> */}
                <br />
                <p><small>by:{seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>Only {stock}left in stock -Order soon</small></p>
                <button className='main-button'
                    // onClick={props.handleAddProduct}>
                    onClick={()=>props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;