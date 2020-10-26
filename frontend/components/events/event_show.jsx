import React from 'react';
import { formatDate, formatTime, showPageMonth, showPageDay } from '../../util/format_util'
import { useHistory } from 'react-router-dom';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.eventId);
    }

    handleClick(e) {
        e.preventDefault();
        if (this.props.currentUserId) {
            this.props.openModal('register');
        } else {
            this.props.history.push("/signin");
        }
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.history.push(`/events/${this.props.event.id}/edit`);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.destroyEvent(this.props.event.id).then(() => this.props.history.push('/'))
    }

    render() {
        const { event, organizer, currentUserId } = this.props;
        if (!organizer) return null;
        if (!event) return null;
         ;

        return (
            <div className="event-show-container">
                <div className="clip-promo-blur">
                    <img className="promo-blur" src={event.photoUrl} alt={event.title} />
                </div>
                <main className="event-show">
                    <div className="es-top">
                        <img className="show-promo" src={event.photoUrl} alt={event.title} />
                        <div className="event-intro">
                            <div className="event-intro-textbox">
                                <h2>
                                    <p className="show-date">{showPageMonth(event.date)}</p>
                                    <p className="show-date">{showPageDay(event.date)}</p>
                                </h2>
                                <h1>{event.title}</h1>
                                <h3>{organizer ? `by ${organizer.fname} ${organizer.lname}` : null}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="es-register">
                        <i className="far fa-heart"></i>
                        { currentUserId === event.organizer_id ? 
                            <div className="edit-delete-event">
                                <button onClick={this.handleEdit}>Edit</button>
                                <button onClick={this.handleDelete}>Delete</button>
                            </div>
                        :
                            <button onClick={this.handleClick}>Register</button>
                        }
                    </div>
                    <div className="es-body">
                        <div className="es-body-L">
                            <h1>About This Event</h1>
                            <p>{event.description}</p>
                        </div >
                        <div className="es-body-R">
                            <h1>Date And Time</h1>
                            <p>{formatDate(event.date)} {event.date !== event.end_date ? `to ${formatDate(event.end_date)}` : null}</p> 
                            <p>{formatTime(event.start_time)} - {formatTime(event.end_time)}</p>
                        </div>
                    </div>
                </main>
                <div className="clip"></div>
            </div>
        )
    }

}

export default EventShow;

