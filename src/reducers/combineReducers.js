import { combineReducers } from 'redux'
import products from './products';
import Cart from './Cart';
import Messager from './Messager';
import Menu from './Menu';
const CombineReducers = combineReducers({
    products, Cart, Messager, Menu
})
export default CombineReducers;