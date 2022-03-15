import React from "react"
import { connect } from 'react-redux'
import Cart from "../components/Cart"
import * as Messager from '../actionTypes'
import ItemCart from "../components/ItemCart"
import CartPayment from "../components/CartPayment"
import { deleteCart, mesUpdate, setQty } from '../actions/index'


class CartCT extends React.Component {
    render() {
        var { cart } = this.props
        return (
            <>
                <Cart>
                    {this.showCart(cart)}
                    {this.showTotal(cart)}
                </Cart>
            </>
        )
    }
    showTotal = (cart) => {
        let resuft = null;
        if (cart && cart.length >= 0) {
            resuft = <CartPayment cart={cart} />
        }
        return resuft
    }
    showCart = (cart) => {
        let resuft = Messager.MSG_CART_EMPTY
        if (cart && cart.length >= 0) {
            resuft = cart.map((item, index) => {
                return <ItemCart key={index} item={item} index={index} onDeleteCart={this.props.onDeleteCart} setQty={this.props.setQty} mes={this.props.mes} />
            })
        }
        return resuft
    }
}
// CartCT.propTypes = {
//     cart: propTypes.arrayOf(
//         propTypes.shape({
//             product: propTypes.shape({
//                 id: propTypes.string.isRequired,
//                 name: propTypes.string.isRequired,
//                 image: propTypes.string.isRequired,
//                 description: propTypes.string.isRequired,
//                 price: propTypes.number.isRequired,
//                 rating: propTypes.number.isRequired,
//                 inventory: propTypes.number.isRequired
//             }),
//             qty: propTypes.number.isRequired
//         }).isRequired

//     ).isRequired
// }
const mapStateToProps = (state) => {
    return {
        cart: state.Cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteCart: (cart) => {
            dispatch(deleteCart(cart))
        },
        mes: (mes) => {
            dispatch(mesUpdate(mes))
        },
        setQty: (qty, id) => {
            dispatch(setQty(qty, id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartCT)