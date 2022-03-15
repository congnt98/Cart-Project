import React from "react";
import * as mes from '../actionTypes'

class ItemCart extends React.Component {
  render() {
    let { item } = this.props
    return (
      <>
        <tr>
          <td> <img
            src={item.product.image}
            alt={item.product.name} /></td>
          <td>{item.product.name}</td>
          <td>
            <div>
              <span id="resuft">{item.qty}

              </span>
              <button className=" btn_table btn_icrease" id="icrease" onClick={() => this.setQty(item.qty + 1, item.product.id)}>+</button>
              <button className="btn_table btn_decrease" onClick={() => this.setQty(item.qty - 1, item.product.id)} >-</button>
            </div>
          </td>
          <td>{item.product.price}</td>
          <td>{this.total(item.product.price, item.qty)}</td>
          <td onClick={() => this.onDeleteCart(item)}>x</td>
        </tr>

      </>
    )
  }
  setQty = (qty, id) => {
    this.props.setQty(qty, id)
  }
  total = (price, quantity) => {
    return price * quantity;

  }
  onDeleteCart = (item) => {
    this.props.onDeleteCart(item)
    this.props.mes(mes.MSG_UPDATE_CART_SUCCSESS)
  }
}

export default ItemCart;
