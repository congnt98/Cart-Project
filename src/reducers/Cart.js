import { ADD_TO_CART, DELETE_CART, SETQTY } from "../actionTypes"
var data = JSON.parse(localStorage.getItem('CART',))
var initState = data ? data : []


const Cart = (state = initState, action) => {
    var { product, qty, cart, id } = action
    switch (action.type) {
        case ADD_TO_CART:
            var index = state.find(x => x.product.id === product.id);
            if (index) {
                index.qty += qty
            } else {
                state.push({
                    product, qty
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        case DELETE_CART:
            var cartDelete = state.filter(e => e.product.id !== cart.product.id)
            localStorage.setItem('CART', JSON.stringify(cartDelete))
            return cartDelete
        case SETQTY:
            var item = state.find(x => x.product.id === id)
            if (item) {
                item.qty = qty
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state];
    }
}

export default Cart