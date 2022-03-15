import React from "react";
class Menus extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar ">
          <div className="list_menu">
            {this.props.children}
          </div>
          <div className="dropdown">
            <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown">
              <i className="fa fa-user"></i>
              Tài khoản
            </span>
            <div className="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
              <span className="dropdown-item" >Đăng ký</span>
              <span className="dropdown-item" >Đăng nhập</span>
              <span className="dropdown-item" >Đăng xuất</span>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Menus;
