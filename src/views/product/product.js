import React from 'react';
import ProductsCT from '../../containers/ProductsCT'
import MessagerCT from '../../containers/MessagerCT';
import CartCT from '../../containers/CartCT';

class Product extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ProductsCT />
                        <MessagerCT />
                        <CartCT />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
