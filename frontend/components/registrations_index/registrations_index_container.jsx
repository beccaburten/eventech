import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserRegistrations } from '../../actions/reg_actions';
import RegistrationsIndex from './registrations_index';

const mSTP = (state) => {
    debugger;
    return ({
        user: state.entities.users[state.session.id],
        registeredEvents: Object.values(state.entities.events)
    })
};

const mDTP = dispatch => {
    return ({
        fetchUserRegistrations: () => dispatch(fetchUserRegistrations())
    })
};

export default withRouter(connect(mSTP, mDTP)(RegistrationsIndex));
