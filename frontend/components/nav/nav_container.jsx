import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';


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
        const { history } = this.props;
        history.push('/');
    }


    render() {
        const { currentUserId } = this.props;
        if (currentUserId !== null) {
            return (
                <nav className='nav-bar'>
                    <div className='logo'>
                        <a href="/"><img className='logo' src={window.eventechURL} /></a>
                    </div>


                    {/* <div className="search">
                        <div className="search-bar">
                            <i className="fas fa-search"></i>
                            <input type="text" className="search-input" placeholder="Search"></input>
                        </div>
                    </div> */}


                    <div className="nav-links">
                        <div className="link-selector" id="create-event" onClick={() => this.props.history.push(`/events/create`)}>
                            <i className="fas fa-plus"></i>
                            <Link className="link" to="'/events/create'" id="create-event">Create Event</Link>
                        </div>

                        <div className="link-selector" onClick={() => this.props.history.push(`/u/${currentUserId}/likes`)}>
                            <i className="far fa-heart"></i>
                            <Link className="link" to={`/u/${currentUserId}/likes`}>Likes</Link>
                        </div>

                        <div className="link-selector" onClick={() => this.props.history.push(`/u/${currentUserId}`)}>
                            <i className="fas fa-ticket-alt"></i>
                            <Link className="link" to={`/u/${currentUserId}`}>Tickets</Link>
                        </div>
                        
                        <div className="dropdown-trigger">
                            <div className="dropdown-icon">
                                <i className="far fa-user-circle"></i>
                            </div>
                            <div className="dropdown-list">
                                <Link className="logout" to="/" onClick={this.handleClick}>Log Out</Link>
                            </div>
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

export default withRouter(connect(mSTP, mDTP)(Nav)); //NavContainer


