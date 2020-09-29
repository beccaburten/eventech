import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { formatDate, formatTime } from '../../util/format_util'

class RegistrationShow extends React.Component {

    render() {
        debugger;
        return (
            <h1>Ticket Show Page TBD</h1>
        )
    }
}

const mSTP = (state) => {
    return ({})
}

const mDTP = (dispatch) => {
    return ({})
}

export default connect(mSTP, mDTP)(RegistrationShow);