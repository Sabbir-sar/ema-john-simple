import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0,15);
    const [products,setProducts]= useState(first10);
    const [cart,setCart] = useState([]);

    const handleAddProduct =(product)=>{
        // console.log('product added',product);
        const newCart =[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            {/* <h1>This is shop</h1> */}
            {/* <h3>{products.length}</h3> */}
            <div className="product-container">
                {/* <ul>
                    {
                        products.map(product =><li>{product.name}</li>)
                    }
                </ul> */}
                {/* {
                    products.map(product =><Product>{product.name}</Product>)
                } */}
                
                {
                    products.map(pd =><Product 
                        handleAddProduct ={handleAddProduct} product={pd}>
                        </Product>)
                } 
               
            </div>
            <div className='cart-container'>
                {/* <h3>This is cart</h3>
                <h5>Order summary:{cart.length}</h5> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;