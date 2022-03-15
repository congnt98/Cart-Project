import React from "react";


class Cart extends React.Component {
  render() {
    return (

      <>
        <section className="cart">
          <table className="cart_table table">
            <thead>
              <tr>
                <td></td>
                <td>Sản Phẩm</td>
                <td> Số Lượng</td>
                <td> Giá</td>
                <td>Tổng công</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </section>

      </>
    )
  }
}

export default Cart;
