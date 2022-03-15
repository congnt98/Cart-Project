import React from "react";
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import Messager from '../components/Messager';

class MessagerCT extends React.Component {
    render() {
        var { messager } = this.props
        return (
            <>
                <Messager messager={messager} />
            </>
        )
    }

}
MessagerCT.propTypes = {
    messager: propTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        messager: state.Messager
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessagerCT)
