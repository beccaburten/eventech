import React from 'react';
import { formatDate, formatTime } from '../../util/format_util';

class RegistrationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { attending: null }
        this.handleRegistration = this.handleRegistration.bind(this);
        this.handleUnregister = this.handleUnregister.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.event.id);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.attendingEvents !== this.props.attendingEvents) {
    //         this.props.fetchEvent(this.props.event.id);
    //     }
    // }

    handleRegistration(e) {
        e.preventDefault();
        this.setState({ attending: true });
        
        const { event } = this.props;
        this.props.registerUser(event.id);
    }

    handleUnregister(e) {
        e.preventDefault();
        const { event, user_id } = this.props;
        
        this.props.unregisterUser({ user_id: user_id, event_id: event.id});
        this.setState({ attending: false });
        
    }

    handleClose(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    render() {
        
        const { event, attendingEvents } = this.props;
        return (
            <div className="modal-contents">                
                <div className="modal-L">
                    <div className="modal-header">
                        <h1>{event.title}</h1>
                        <h3>{formatDate(event.date)} {event.date !== event.end_date ? `to ${formatDate(event.end_date)}` : null} {formatTime(event.start_time)} - {formatDate(event.end_time)} {formatTime(event.end_time)}</h3>
                    </div>
                    <div className="modal-body">
                        {event.description}
                    </div>
                    <div className="modal-footer">
                        {this.state.attending || attendingEvents.includes(event.id) ? <button onClick={this.handleUnregister}>Unregister</button> : <button onClick={this.handleRegistration}>Register</button>}
                        {/* {attendingEvents.includes(event.id) ? <button onClick={this.handleUnregister}>Unregister</button> : <button onClick={this.handleRegistration}>Register</button> } */}
                    </div>
                </div>
                <div className="modal-R">
                    <div className="close-modal" onClick={this.handleClose}><i className="fas fa-times"></i></div>
                    <img className="modal-promo" src={event.photoUrl} alt={event.title} />
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        )
    }
}

export default RegistrationModal;