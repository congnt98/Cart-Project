import React from "react"
import { connect } from 'react-redux'
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
class MenuCT extends React.Component {

    render() {
        var { Menus } = this.props
        return (
            <>
                <Menu>
                    {this.onShowListMenu(Menus)}
                </Menu>
            </>
        )
    }
    onShowListMenu = (Menus) => {
        let resuft = null
        if (Menus.length > 0) {
            resuft = Menus.map((menu, index) => {
                return (<MenuItem key={index} menu={menu} />);
            })
        }
        return resuft
    }
}
const mapStateToProps = (state) => {
    return {
        Menus: state.Menu
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuCT)