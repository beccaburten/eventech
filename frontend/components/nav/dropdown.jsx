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
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <button onClick={this.handleClick}>Log Out</button>
            </ul>

        )
    }
}

export default Dropdown;