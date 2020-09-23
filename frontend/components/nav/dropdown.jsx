import React from 'react';
import {Link} from 'react-router-dom'


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <ul id="profile-dropdown">
                <div className="profile-icon">
                    <i className="far fa-user-circle"></i>
                </div>
                <li className="logout-button">
                <button onClick={this.handleClick}>Log Out</button>
                </li>
            </ul>

        )
    }
}

export default Dropdown;