import React from 'react';
import RegistrationIndexItem from './registration_index_item';

class RegistrationsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        debugger;
        const { attendingEvents, user} = this.props;
        if (!user) return null;
        if (attendingEvents.some((event) => typeof event === 'undefined')) return null;

        debugger;
        return (
            <div className="registration-index-container">
                <header className="reg-indx-header">
                    <i className="far fa-user"></i>
                    <div className="reg-indx-text">
                        <h1>{user.fname} {user.lname} </h1>
                        <p>{attendingEvents.length} tickets</p>
                    </div>
                </header>
                <div className="registration-index">
                    <h3>Tickets</h3>
                    {attendingEvents.map((attendingEvent, idx) => (
                        <RegistrationIndexItem key={idx} attendingevent={attendingEvent} user={user} />
                    ))}
                </div>
            </div>
        )
    }
}

export default RegistrationsIndex;