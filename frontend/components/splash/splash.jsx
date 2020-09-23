import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';

class Splash extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const { currentUserId, logout } = this.props;
        if (currentUserId) {
            return (
                <Dropdown />
            )
        } else {
            return (
                <Link to='/signin'>Sign In</Link>
            )
        }
    }
}

const mSTP = (state) => ({
    currentUserId: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(Splash); //SplashContainer

