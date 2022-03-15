import React from "react";

class Messager extends React.Component {
  render() {
    var { messager } = this.props
    return (
      <>
        <h3 className="message"><span>{messager}</span></h3>
      </>
    )
  }
}

export default Messager;
