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
                <ul className='nav-bar'>
                    <li><a href="/"><img className='logo' src={window.eventechURL} /></a></li>
                    <li><a href="/">Future Search Bar</a></li>
                    <li><a href="about.asp">Likes</a></li>
                    <li><Dropdown logout={this.props.logout} /></li>
                </ul>
            )
        } else {
            return (
                <nav className='nav-bar'>
                    <a href="/"><img className='logo' src={window.eventechURL} /></a>
                    <Link to="/">Search?(pending)</Link>
                    <Link to="/">Create Event(pending)</Link>
                    <Link className="signin" to='/signin'>Sign In</Link>
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

