import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mSTP = (state) => ({
    loggedIn: Boolean(state.session.id)
});

const Protected = ({ loggedIn, path, component: Component }) => {
    return (
        <Route path={path} render={(props) => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
        )} />
    )
}

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));