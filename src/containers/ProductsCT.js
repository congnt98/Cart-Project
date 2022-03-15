import React from "react";
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import Products from "../components/Products";
import ItemProduct from "../components/ItemProduct";
import { addToCart, addToCartMessger } from '../actions/index'

class ProductsCT extends React.Component {
    render() {
        var { products } = this.props
        return (
            <>
                <Products>
                    {
                        this.showProduct(products)
                    }
                </Products>
            </>
        )
    }
    showProduct = (products) => {
        if (products && products.length > 0) {
            var product = products.map((product, index) => {
                return (<ItemProduct key={index} product={product} onAddToCart={this.props.onAddToCart} onAddToCartMessager={this.props.onAddToCartMessager} />)
            })
        }
        return product
    }
}
ProductsCT.propTypes = {
    products: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            name: propTypes.string.isRequired,
            image: propTypes.string.isRequired,
            description: propTypes.string.isRequired,
            price: propTypes.number.isRequired,
            rating: propTypes.number.isRequired,
            inventory: propTypes.number.isRequired
        })
    ).isRequired,
    onAddToCartMessager: propTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(addToCart(product, 1))
        },
        onAddToCartMessager: (messager) => {
            dispatch(addToCartMessger(messager))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsCT)
