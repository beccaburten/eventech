import React from 'react';
import RegistrationIndexItem from './registration_index_item';

class RegistrationsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserRegistrations();
    }

    render() {
        debugger;
        const { registeredEvents, user} = this.props;
        if (!user) return null;
        if (!registeredEvents) return null;

        debugger;
        return (
            <div className="registration-index-container">
                <header className="reg-indx-header">
                    <i className="far fa-user"></i>
                    <div className="reg-indx-text">
                        <h1>{user.fname} {user.lname} </h1>
                        <p>{registeredEvents.length} tickets</p>
                    </div>
                </header>
                <div className="registration-index">
                    <h3>Tickets</h3>
                    {registeredEvents.map((registration, idx) => (
                        <RegistrationIndexItem key={idx} registration={registration} user={user} />
                    ))}
                </div>
            </div>
        )
    }
}

export default RegistrationsIndex;