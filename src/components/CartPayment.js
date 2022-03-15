import React from "react";

class CartPayment extends React.Component {
  render() {
    let { cart } = this.props
    return (
      <>
        <tr>
          <td colSpan="3"></td>
          <td>
            <h4>Tổng tiền</h4>
          </td>
          <td>
            <h4>{this.showTotal(cart)}$</h4>
          </td>
          <td colSpan="3">
            <button className=" btn_table btn_payment"> <i className="fa fa-angle-right"></i></button>
          </td>
        </tr>

      </>
    )
  }
  showTotal = (cart) => {
    let total = 0
    cart.forEach(e => {
      total += e.product.price * e.qty
    });

    return total

  }
}

export default CartPayment;
