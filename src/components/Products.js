import React from "react";


class Products extends React.Component {
  render() {
    return (
      <>
        <section className="product">
          <h1> Danh Sách sản phẩm</h1>
          <div className="row">
            {this.props.children}
          </div>
        </section>

      </>
    )
  }
}
export default Products
