import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchRegistration } from '../../actions/reg_actions';
import { unregisterUser } from '../../actions/reg_actions';
import { closeModal } from '../../actions/modal_actions';
import CancelOrder from './cancel_order.jsx';

const mSTP = (state, ownProps) => {
    debugger;
    return ({
        user_id: ownProps.location.pathname.split("/")[2],
        regId: ownProps.location.pathname.split("/").reverse()[0]
    });
};

const mDTP = dispatch => {
    return {
        fetchRegistration: (regId) => dispatch(fetchRegistration(regId)),
        unregisterUser: (regId) => dispatch(unregisterUser(regId)),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mSTP, mDTP)(CancelOrder));