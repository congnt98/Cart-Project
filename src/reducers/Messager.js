import * as Types from "../actionTypes"
var initState = Types.MSG_WELCOM


const Messager = (state = initState, action) => {
    switch (action.type) {
        case Types.MSG_ADD_TO_CART_SUCCSESS:
            return action.messager;
        default: return state;
        case Types.MSG_UPDATE_CART_SUCCSESS:
            return action.messager
    }
}

export default Messager