import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
        // this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // whenFocusOrBlur(e) {
    //     const newState = !this.state.show;
    //     this.setState({ show: newState })
    // }

    handleClick(e) {
        e.preventDefault();
        this.props.logout();
    }


    render() {
        const { currentUserId } = this.props;
        if (currentUserId !== null) {
            return (
                <nav className='nav-bar-main'>
                    <div className='logo'><a href="/"><img className='logo' src={window.eventechURL} /></a></div>
                    <div><Link className="link" to="/">Create Event</Link></div>
                    <div><Link className="link" to="/">Likes</Link></div>
                    <div><Link className="link" to="/">Tickets</Link></div>
                    {/* <div onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>   */}
                    <div className="dropdown">
                        <div className="dropdown-icon">
                            <i className="far fa-user-circle"></i>
                        </div>
                        <div className="dropdown-list">
                            <div className="logout" onClick={this.handleClick}>Log Out</div>
                        </div>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav className='nav-bar'>
                    <div className='logo'><a href="/"><img className='logo' src={window.eventechURL} /></a></div>
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

