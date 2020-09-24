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
                    <ul className='nav-bar'>
                        <li><Link to="/"><img className='logo' src={window.eventechURL} /></Link></li>
                        <li><Link to="/">Create Event</Link></li>
                        <li><Link to="/">Likes</Link></li>
                        <li><Link to="/">Tickets</Link></li>
                        <li><Dropdown logout={this.props.logout} /></li>
                    </ul>
                </nav>
            )
        } else {
            return (
                <ul className='nav-bar'>
                    <li><a href="/"><img className='logo' src={window.eventechURL} /></a></li>
                    <li><Link className="signin" to='/signin'>Sign In</Link></li>
                </ul>
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


