import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate, formatTime } from '../../util/format_util';
import { unregisterUser } from '../../actions/reg_actions';
import { fetchEvent } from '../../actions/event_actions';
import { openModal } from '../../actions/modal_actions';


class RegistrationShow extends React.Component {
    constructor(props) {
        super(props);
        // this.handleUnregister = this.handleUnregister.bind(this);
        this.openCancelModal = this.openCancelModal.bind(this);
    }


    goBack() {
        this.props.history.goBack();
    }

    componentDidMount() {
        
        this.props.fetchEvent(this.props.event_id);
    }

    // handleUnregister(e) {
    //     e.preventDefault();
    //     
    //     const { regId } = this.props;
    //     this.props.unregisterUser(regId);
    //     window.alert('You have successfully unregistered from this event. If you would like to re-register, simply follow the link to the event page.')
    // }

    openCancelModal(e) {
        e.preventDefault();
        this.props.openModal('cancel-order');
    }

    render() {
        
        const { event, user} = this.props;
        if (!event) return null;
        if (!user) return null;

        return (
            <div className="ticket-show-container">
                <div className="ticket-show-intro">
                    <Link to={`/u/${user.id}`} className="back-to-reg-idx">← Back to Current Orders</Link>
                    <div className="order-for">Order for <Link to={`/events/${event.id}`} id="ticket-title-link">{event.title}</Link></div>
                    <p id="free">Free Order #{event.id}</p>
                    <div className="event-info-flex">
                        <p id="ev-i-dark">Event information: </p> 
                        <p>{formatDate(event.date)} from {formatTime(event.start_time)} to {formatTime(event.end_time)}</p>
                    </div>
                </div>
                <div className="ticket-show-info">
                    {/* <button onClick={this.handleUnregister} className="cancel-order">Cancel Order</button>             */}
                    <button onClick={this.openCancelModal} className="cancel-order">Cancel Order</button> 
                    <div className="ticket-stub">
                        <p className="GA">General Admission</p>
                        <p className="contact-info">Contact Information</p>
                        <div className="field-flex">
                            <p className="fields">First Name </p>
                            <p id="ast"> *</p>
                        </div>   
                            <p className="inputs">{user.fname}</p>
                        <div className="field-flex">
                            <p className="fields">Last Name </p>
                            <p id="ast"> *</p>
                        </div>
                            <p className="inputs">{user.lname}</p>
                        <div className="field-flex">
                            <p className="fields">Email </p>
                            <p id="ast"> *</p>
                        </div>
                            <p className="inputs">{user.email}</p>
                        <p className="fields">Delivery Method</p>
                            <p className="inputs">eTicket</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    const user_id = ownProps.match.params.user_id;
    const event_id = ownProps.match.params.event_id;
    const event = state.entities.events[event_id]
    
    return ({
        user: state.entities.users[user_id], user_id, 
        event, event_id
    })
}

const mDTP = (dispatch) => {
    
    return ({
        fetchEvent: (event_id) => dispatch(fetchEvent(event_id)),
        unregisterUser: (event_id) => dispatch(unregisterUser(event_id)),
        openModal: modal => dispatch(openModal(modal))
    })
}

export default connect(mSTP, mDTP)(RegistrationShow);