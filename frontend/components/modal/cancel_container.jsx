import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { unregisterUser } from '../../actions/reg_actions';
import { fetchEvent } from '../../actions/event_actions';
import { closeModal } from '../../actions/modal_actions';
import CancelOrder from './cancel_order.jsx';

const mSTP = (state, ownProps) => {
     ;
    const user_id = state.session.id;
    return ({
        user: state.entities.users[user_id], user_id,
        event_id: ownProps.location.pathname.split("/").reverse()[0]
    });
};

const mDTP = dispatch => {
    return {
        fetchEvent: (event_id) => dispatch(fetchEvent(event_id)),
        unregisterUser: (ids) => dispatch(unregisterUser(ids)),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mSTP, mDTP)(CancelOrder));