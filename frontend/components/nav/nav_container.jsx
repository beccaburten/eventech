import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';

class Nav extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const { currentUserId } = this.props;
        if (currentUserId !== null) {
            return (
                <nav className='nav-bar'>
                    <img className='logo' src={window.eventechURL} />
                    <Dropdown logout={this.props.logout} />
                </nav>
            )
        } else {
            return (
                <nav className='nav-bar'>
                    <img className='logo' src={window.eventechURL} />
                    <Link to='/signin'>Sign In</Link>
                </nav>
            )
        }
    }
}

const mSTP = (state) => ({
    currentUserId: state.session.id
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(Nav); //NavContainer

