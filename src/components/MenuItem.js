import React from "react";
import {
    Link
} from "react-router-dom";
class MenuItem extends React.Component {

    render() {
        var { menu } = this.props

        return (
            <>
                <Link to={menu.to} className='navbar-brand'> {menu.name}</Link>

            </>
        )
    }
}

export default MenuItem;
