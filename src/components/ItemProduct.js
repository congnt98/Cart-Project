import React from "react";
import * as messager from '../actionTypes'

class ItemProduct extends React.Component {
  render() {
    var { product } = this.props
    return (
      <>
        <div className="col-md-4">
          <div className="item_product">
            <div className="view_product" >
              <img
                src={product.image}
                alt={product.name} />
            </div>
            <div className="product_body">
              <h4><strong> {product.name}</strong></h4>
              <ul className="rating">
                {this.showRating(product.rating)}
              </ul>
              <p>{product.decription}</p>
            </div>
            <div className="product_footer">
              <span>{product.price}</span>
              <span className="addproduct" onClick={() => this.onAddToCart(product)}></span>
            </div>
          </div>
        </div>
      </>
    )
  }

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onAddToCartMessager(messager.MSG_ADD_TO_CART_SUCCSESS);
  }
  showRating = (rating) => {
    var resuft = []
    for (let i = 0; i <= rating; i++) {
      resuft.push(< li key={i} className="item_rating" > <i className="fa fa-star"></i></li >)
    }
    return resuft
  }
}

export default ItemProduct;
